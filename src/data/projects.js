// One object per active project card on the homepage / projects page.
// `image` paths point at /public/images/projects/ — drop the matching
// file in there with the same name (see README in that folder).
export const projects = [
  {
    slug: "lre-gen4",
    title: "LRE GEN4 | Experimental Cooling",
    categories: ["Propulsion"],
    summary: `
      **LRE GEN4 is SFU Rocketry’s next step into a higher thrust class** — a 10 kN liquid bipropellant engine designed to evaluate non-traditional cooling methods. The goal is to explore simpler alternatives to regenerative cooling while still handling significantly higher thermal loads than previous engines.

      GEN4 is fully instrumented, with sensors throughout the engine to capture pressure, temperature, and heat flux data. This allows us to directly validate thermal models and better understand how these alternative cooling strategies behave at scale.

      As the largest engine we've built so far, GEN4 also helps us gain experience with new design challenges — higher flow rates, larger hardware, and more demanding structural loads — all of which feed into the long-term goal of developing a regeneratively cooled engine.
    `.trim(),
    image: `${import.meta.env.BASE_URL}images/projects/lre-gen4.jpg`,
  },
  {
    slug: "lre-gen3",
    title: "LRE GEN3 | Advanced Telemetry",
    categories: ["Propulsion"],
    summary: `
      **SFU Rocketry is developing our Liquid Rocket Engine (LRE) GEN3 propulsion system**: a 3 kN, heatsink-cooled engine focused on validating proprietary seal technology designed in-house by SFU Rocketry.

      Keeping thrust chambers sealed is hard. High pressures, extreme cold (-200C) and hot (1200C) temperatures, and aggressive combustion environments challenge even the most robust designs. Our proprietary sealing approach aims to address these challenges with simple, scalable hardware — GEN3 is the testbed to prove it.

      GEN3 features embedded sensors throughout the engine body, enabling real-time measurements of combustion pressures, chamber temperatures, and various forces. This data will allow us to empirically validate high-fidelity simulation models, improving the predictive power of our design tools and accelerating development of future engines.

      GEN3 is planned to be SFU Rocketry’s first public demonstration engine. By showcasing a full static hotfire in front of a live audience of students, professionals, municipal/provincial government officials, and family/friends, our goal is to raise awareness about Rocket Propulsion on the west coast of our country - highlighting Canadian talent in aerospace and inspiring the next generation of engineers.
    `.trim(),
    image: `${import.meta.env.BASE_URL}images/projects/lre-gen3.jpg`,
  },
  {
    slug: "silencer",
    title: "Engine Acoustics Silencer",
    categories: ["Mechanical", "Propulsion"],
    summary:`
      SFU Rocketry is developing the **Engine Acoustics Silencer** — a transportable water-deluge-based system designed to dramatically reduce the sound generated during rocket engine testing. Rocket engines can exceed 180 dB during firing, producing dangerous and disruptive levels of acoustic energy. This system allows us to safely operate high-thrust engines in locations that would otherwise be inaccessible due to noise constraints.

      The design centers around a large cylindrical enclosure equipped with high-flow water nozzles that spray directly into the engine plume. The water rapidly cools and disrupts the supersonic exhaust jet, breaking up shock structures and dramatically reducing broadband noise. The cylindrical housing helps further contain and dampen the remaining sound energy.
    `.trim(),
    image: `${import.meta.env.BASE_URL}images/projects/silencer.jpg`,
  },
  {
    slug: "etc",
    title: "Engine Test Cell",
    categories: ["Mechanical", "Propulsion"],
    summary:`
      **SFU Rocketry is building a new permanent engine test system - the Engine Test Cell (ETC)**. Designed around a reinforced 20-foot shipping container, ETC integrates all key systems required for static fire testing: high-capacity propellant tanks, nitrogen pressurization, advanced instrumentation, structural engine mounting, remote actuation hardware, and real-time data acquisition.

      The entire system is self-contained and fully transportable, allowing us to conduct hot-fire tests at multiple approved sites. This mobility gives us the flexibility to adapt to regulatory and logistical constraints, while ensuring consistent safety standards and operational procedures at each location.

      By consolidating setup into a permanent, ready-to-fire unit, we can significantly reduce setup and teardown time during test campaigns - reducing 3-day setups to 3 hours. ETC also supports longer burns thanks to expanded tank volumes and is structurally rated for engines up to at least 50 kN of thrust.

      With built-in diagnostics and instrumentation, it provides live feedback on pressure, temperature, thrust, and valve timing, enabling detailed post-test analysis and iterative improvements across engine programs. The system is also being designed with safety and repeatability in mind, incorporating standard isolation protocols, remote control operation, and compatibility with high-thrust load cells and flame trench systems. 
    `.trim(),
    image: `${import.meta.env.BASE_URL}images/projects/etc.jpg`,
  },
  {
    slug: "lace-1",
    title: "LACE-1 | ISG Propulsion R&D",
    categories: ["Propulsion", "Innovative Solutions Group"],
    summary:`
      SFU Rocketry is developing LACE — **the Laminated Active Cooling Engine** — a new approach to regenerative cooling built around stackable, CNC-cut plates. By slicing the engine into cross-sectional layers of varying thickness, we can design internal cooling channels directly into each plate. These plates are then assembled, bonded (welded), and finish-machined into a complete thrust chamber with internal flow paths that would be impossible to produce using conventional subtractive methods.

      This approach allows for highly optimized cooling geometries, better thermal performance, and lower manufacturing complexity compared to traditional regenerative cooling. It also makes use of existing in-house fabrication tools like CNC plasma cutting, reducing the cost and turnaround time typically associated with regen engines.

      LACE represents a major step toward high-performance, flight-ready propulsion systems — and serves as a proving ground for advanced cooling designs that will carry over into future mission-class engines.
    `.trim(),
    image: `${import.meta.env.BASE_URL}images/projects/lace-1.jpg`,
  },
  {
    slug: "ablatives",
    title: "Ablatives | ISG Materials R&D",
    categories: ["Mechanical", "Innovative Solutions Group"],
    summary:`
      SFU Rocketry is researching and developing custom thermally insulative and ablative materials to use in heat shielding and the construct propulsion system parts. Our goal is to lower the manufacturing cost and complexity of actively cooled engines by developing engine designs using novel ablative materials. 
    `.trim(),
    image: `${import.meta.env.BASE_URL}images/projects/ablatives.jpg`,
  },
  {
    slug: "power-systems",
    title: "Power, Battery, and BMS Systems",
    categories: ["Hardware"],
    summary:`
      All of SFU Rocketry's hardware projects require reliable power systems that can handle special requirements related to weight, high-power delivery, modularity, temperature, and weather resistance. We address these requirements by designing and building custom batteries, battery management PCBs, power converters, and the accompanying validation equipment such as dynamic loads and analyzers. 
    `.trim(),
    image: `${import.meta.env.BASE_URL}images/projects/power-systems.jpg`,
  },
  {
    slug: "cryo",
    title: "CRYO | ISG Sensors R&D",
    categories: ["Mechanical", "Hardware", "Software", "Innovative Solutions Group"],
    summary:`
      All SFU Rocketry engines have used liquid oxygen (LOX), which is transported from a large supply tank into the Test Stand tanks before firing. LOX is a pure oxidizer, and a cryogenic near absolute zero, which makes it challenging and high-risk to work with. In order to monitor the status of the tanks when filling and while firing, our Cryogenic Systems Module team is developing a LOX-safe capacitance sensor and processing module to ensure our LOX tanks are filled and operated correctly. 
    `.trim(),
    image: `${import.meta.env.BASE_URL}images/projects/cryo.jpg`,
  },
  {
    slug: "venturi",
    title: "Venturi Flowmeters | ISG Sensors R&D",
    categories: ["Propulsion", "Mechanical", "Innovative Solutions Group"],
    summary:`
      SFU Rocketry is developing in-house designed Venturi Flowmeters, a breakthrough in cost-effective precision fluid measurement to support propulsion system feedback and control. Tailored specifically for rocketry applications, these flowmeters exemplify our dedication to self-reliance and technical advancement. Their innovative designs ensure accurate and reliable measurements of fluid flow, crucial for optimizing engine performance, while costing less than 10% of equivalent commercial options. Compact and efficient, the Venturi Flowmeters are pivotal tools in our mission to build larger and more powerful engines capable of reaching the upper atmosphere. 
    `.trim(),
    image: `${import.meta.env.BASE_URL}images/projects/venturi.jpg`,
  },
];
