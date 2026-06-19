const { DesignCanvas, DCSection, DCArtboard } = window;

const App = () => {
  return (
    <DesignCanvas
      title="Welcome Flows · BrightKidCo"
      subtitle="Flow 1 · 6 emails · Autistic Parent  ·  Flow 2 · 4 emails · Discount Welcome"
    >
      <DCSection id="welcome-flow" title="Flow 1 · Welcome Flow · Autistic Parent">
        <DCArtboard id="e1" label="Email 1 · Permission & Reassurance · Immediate" width={MW} height={4800}>
          <window.V10_Final />
        </DCArtboard>

        <DCArtboard id="e2" label="Email 2 · The Mechanism · +24h" width={MW} height={4900}>
          <window.Email2 />
        </DCArtboard>

        <DCArtboard id="e3" label="Email 3 · Why Everything Failed · +2 days" width={MW} height={5100}>
          <window.Email3 />
        </DCArtboard>

        <DCArtboard id="e4" label="Email 4 · How the Product Works · +4 days" width={MW} height={5900}>
          <window.Email4 />
        </DCArtboard>

        <DCArtboard id="e5" label="Email 5 · Sarah's Story · +6 days" width={MW} height={4800}>
          <window.Email5 />
        </DCArtboard>

        <DCArtboard id="e6" label="Email 6 · The Invitation · +8 days" width={MW} height={5400}>
          <window.Email6 />
        </DCArtboard>
      </DCSection>

      <DCSection id="discount-flow" title="Flow 2 · Discount Welcome · BRIGHT10">
        <DCArtboard id="f2e1" label="Email 1 · Code Delivery · Immediate" width={MW} height={5600}>
          <window.F2Email1 />
        </DCArtboard>

        <DCArtboard id="f2e2" label="Email 2 · Mechanism · +36h" width={MW} height={5200}>
          <window.F2Email2 />
        </DCArtboard>

        <DCArtboard id="f2e3" label="Email 3 · Parent Story · +3 days" width={MW} height={6000}>
          <window.F2Email3 />
        </DCArtboard>

        <DCArtboard id="f2e4" label="Email 4 · Guarantee Closer · +2 days" width={MW} height={6000}>
          <window.F2Email4 />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
