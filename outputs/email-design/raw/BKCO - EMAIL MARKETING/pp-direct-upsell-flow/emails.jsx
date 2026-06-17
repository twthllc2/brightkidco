/* PP Direct Upsell · Email Components
   Each email is a React component that pulls copy from window.FLOW_PPDIRECTUPSELL
   and assembles it using Giuliano's primitives (EmailShell, Header, TitleBlock, etc.).
   
   Pattern (see welcome-flow/email-6.jsx for a real example):
     const Email1 = () => {{
       const c = window.FLOW_PPDIRECTUPSELL.e1;
       return (
         <EmailShell preheader={{c.preheader}} bg={{"#FFFBF0"}}>
           <Header bg={{"#FFFBF0"}} />
           <TitleBlock badge={{c.heroBadge}} part1={{c.h1a}} part2={{c.h1b}} />
           <Letter bg={{"#FFF6E2"}} paras={{c.letterOpening}} />
           ...
           <CTAClose intro={{"..."}} button={{c.ctaButton}} fine={{c.ctaFinePrint}} />
           <Signoff />
           <OutLine />
           <Footer />
         </EmailShell>
       );
     }};
     Object.assign(window, {{ Email1 }});
*/

// const Email1 = () => { ... };
// const Email2 = () => { ... };
// const Email3 = () => { ... };

// Object.assign(window, { Email1, Email2, Email3 });
