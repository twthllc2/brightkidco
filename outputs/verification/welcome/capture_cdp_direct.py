#!/usr/bin/env python3
"""Take screenshots using websockets directly with CDP."""
import asyncio
import json
import websockets
import base64
import os

async def take_screenshots():
    # Connect to Chrome CDP
    ws_url = "ws://127.0.0.1:9222/devtools/browser"
    
    try:
        async with websockets.connect(ws_url) as ws:
            print("Connected to Chrome CDP")
            
            # Create a new target (tab)
            msg_id = 1
            await ws.send(json.dumps({
                "id": msg_id,
                "method": "Target.createTarget",
                "params": {"url": "about:blank"}
            }))
            response = json.loads(await ws.recv())
            target_id = response.get("result", {}).get("targetId")
            print(f"Created target: {target_id}")
            
            # Attach to the target
            msg_id += 1
            await ws.send(json.dumps({
                "id": msg_id,
                "method": "Target.attachToTarget",
                "params": {"targetId": target_id, "flatten": True}
            }))
            response = json.loads(await ws.recv())
            session_id = response.get("result", {}).get("sessionId")
            print(f"Attached to target, session: {session_id}")
            
            # Navigate to the HTML file
            msg_id += 1
            await ws.send(json.dumps({
                "id": msg_id,
                "method": "Page.navigate",
                "params": {"url": "file:///root/projects/brightkidco/outputs/verification/welcome/welcome-01-e7-l2-render.html"},
                "sessionId": session_id
            }))
            
            # Wait for responses
            for _ in range(10):
                try:
                    response = json.loads(await asyncio.wait_for(ws.recv(), timeout=2.0))
                    if "result" in response and "frameId" in response.get("result", {}):
                        print("Navigation started")
                        break
                except asyncio.TimeoutError:
                    continue
            
            # Wait for page to load
            await asyncio.sleep(3)
            
            # Take screenshots at different viewports
            viewports = [
                {"width": 375, "height": 800, "name": "welcome-01-e7-l2-375-mobile.png", "full_page": True},
                {"width": 420, "height": 800, "name": "welcome-01-e7-l2-420-full.png", "full_page": True},
                {"width": 420, "height": 568, "name": "welcome-01-e7-l2-420x568-above-fold.png", "full_page": False},
            ]
            
            for vp in viewports:
                # Set viewport
                msg_id += 1
                await ws.send(json.dumps({
                    "id": msg_id,
                    "method": "Emulation.setDeviceMetricsOverride",
                    "params": {
                        "width": vp["width"],
                        "height": vp["height"],
                        "deviceScaleFactor": 1,
                        "mobile": False
                    },
                    "sessionId": session_id
                }))
                
                # Wait for response
                for _ in range(5):
                    try:
                        response = json.loads(await asyncio.wait_for(ws.recv(), timeout=2.0))
                        if "id" in response and response["id"] == msg_id:
                            print(f"Viewport set to {vp['width']}x{vp['height']}")
                            break
                    except asyncio.TimeoutError:
                        continue
                
                await asyncio.sleep(1)
                
                # Take screenshot
                msg_id += 1
                screenshot_params = {"format": "png"}
                if not vp["full_page"]:
                    screenshot_params["clip"] = {
                        "x": 0,
                        "y": 0,
                        "width": vp["width"],
                        "height": vp["height"]
                    }
                
                await ws.send(json.dumps({
                    "id": msg_id,
                    "method": "Page.captureScreenshot",
                    "params": screenshot_params,
                    "sessionId": session_id
                }))
                
                # Wait for screenshot response
                for _ in range(10):
                    try:
                        response = json.loads(await asyncio.wait_for(ws.recv(), timeout=5.0))
                        if "id" in response and response["id"] == msg_id:
                            if "result" in response and "data" in response["result"]:
                                # Decode base64 and save
                                img_data = base64.b64decode(response["result"]["data"])
                                filepath = f"/root/projects/brightkidco/outputs/verification/welcome/{vp['name']}"
                                with open(filepath, "wb") as f:
                                    f.write(img_data)
                                print(f"Saved: {vp['name']} ({len(img_data)} bytes)")
                            else:
                                print(f"Error taking screenshot: {response}")
                            break
                    except asyncio.TimeoutError:
                        continue
            
            # Close the target
            msg_id += 1
            await ws.send(json.dumps({
                "id": msg_id,
                "method": "Target.closeTarget",
                "params": {"targetId": target_id}
            }))
            
            print("All screenshots saved successfully")
            
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        return False
    
    return True

if __name__ == "__main__":
    success = asyncio.run(take_screenshots())
    exit(0 if success else 1)
