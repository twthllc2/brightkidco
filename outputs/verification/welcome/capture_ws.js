const http = require('http');

// First, get the list of targets
http.get('http://127.0.0.1:9222/json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const targets = JSON.parse(data);
    console.log('Targets:', JSON.stringify(targets, null, 2));
    
    // Try to connect to the page via websocket
    const WebSocket = require('ws');
    const page = targets[0];
    if (!page) {
      console.log('No targets found');
      process.exit(1);
    }
    
    console.log('Connecting to:', page.webSocketDebuggerUrl);
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    
    ws.on('open', () => {
      console.log('Connected!');
      
      // Navigate to the HTML file
      const navCmd = {
        id: 1,
        method: 'Page.navigate',
        params: { url: 'file:///root/projects/brightkidco/outputs/verification/welcome/welcome-01-e8-l1-render.html' }
      };
      ws.send(JSON.stringify(navCmd));
    });
    
    ws.on('message', (data) => {
      const msg = JSON.parse(data.toString());
      console.log('Response:', JSON.stringify(msg));
      
      if (msg.id === 1) {
        // Navigation complete, wait for render
        setTimeout(() => {
          // Take screenshot
          const screenshotCmd = {
            id: 2,
            method: 'Page.captureScreenshot',
            params: { format: 'png', captureBeyondViewport: true }
          };
          ws.send(JSON.stringify(screenshotCmd));
        }, 5000);
      }
      
      if (msg.id === 2 && msg.result && msg.result.data) {
        // Save screenshot
        const fs = require('fs');
        const buffer = Buffer.from(msg.result.data, 'base64');
        fs.writeFileSync('/root/projects/brightkidco/outputs/verification/welcome/welcome-01-e8-l1-screenshot.png', buffer);
        console.log('Screenshot saved! Size:', buffer.length, 'bytes');
        ws.close();
        process.exit(0);
      }
    });
    
    ws.on('error', (err) => {
      console.error('WebSocket error:', err.message);
      process.exit(1);
    });
  });
}).on('error', (e) => console.error('HTTP error:', e.message));
