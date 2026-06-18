const { DesignCanvas, DCSection, DCArtboard } = window;
const MW = 420;

const App = () => {
  return (
    <DesignCanvas
      title="Welcome · GF"
      subtitle="8 emails · General Family · Day 0 to Day 21"
    >
      <DCSection id="welcome-gf" title="Welcome Flow · General Family">
        <DCArtboard id="e1" label="Email 1 · Day 0 · Permission & Reassurance" width={MW} height={5400}>
          <Email1 />
        </DCArtboard>
        <DCArtboard id="e2" label="Email 2 · Day 1 · Mechanism Reframe" width={MW} height={4800}>
          <Email2 />
        </DCArtboard>
        <DCArtboard id="e3" label="Email 3 · Day 3 · 49% Stat + Mechanism" width={MW} height={5000}>
          <Email3 />
        </DCArtboard>
        <DCArtboard id="e4" label="Email 4 · Day 7 · Three-Family Testimonials" width={MW} height={5200}>
          <Email4 />
        </DCArtboard>
        <DCArtboard id="e5" label="Email 5 · Day 10 · Objection Handling" width={MW} height={5600}>
          <Email5 />
        </DCArtboard>
        <DCArtboard id="e6" label="Email 6 · Day 14 · Pull-Ups Reframe" width={MW} height={4800}>
          <Email6 />
        </DCArtboard>
        <DCArtboard id="e7" label="Email 7 · Day 17 · Deep Mechanism" width={MW} height={5400}>
          <Email7 />
        </DCArtboard>
        <DCArtboard id="e8" label="Email 8 · Day 21 · Soft Close" width={MW} height={4800}>
          <Email8 />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
