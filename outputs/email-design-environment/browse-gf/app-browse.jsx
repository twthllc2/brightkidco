const { DesignCanvas, DCSection, DCArtboard } = window;

const App = () => {
  return (
    <DesignCanvas
      title="Browse Abandonment · BrightKidCo"
      subtitle="Flow 04 · 3 emails · Cross-Level GF · R1-R6 Calibrated"
    >
      <DCSection id="browse-flow" title="Browse Abandonment · GF Cross-Level">
        <DCArtboard id="e1" label="E1 · The Signal · 30 min" width={MW} height={420} style={{ height: 'auto', overflow: 'visible' }}>
          <window.BrowseE1 />
        </DCArtboard>

        <DCArtboard id="e2" label="E2 · Three Parents · +24h" width={MW} height={420} style={{ height: 'auto', overflow: 'visible' }}>
          <window.BrowseE2 />
        </DCArtboard>

        <DCArtboard id="e3" label="E3 · 60 Days · +72h" width={MW} height={420} style={{ height: 'auto', overflow: 'visible' }}>
          <window.BrowseE3 />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
