// One object per active project card on the homepage / projects page.
// `image` paths point at /public/images/projects/ — drop the matching
// file in there with the same name (see README in that folder).
export const projects = [
  {
    slug: "lre-gen6",
    status: "ongoing",
    title: "LRE GEN6 | Experimental Cooling",
    categories: ["Propulsion"],
    cardDescription: "",
    summary: `
      **LRE GEN6 is SFU Rocketry’s next step into a higher thrust class** — a 15 kN liquid bipropellant engine designed to evaluate regen cooling methods.

      GEN6 is fully instrumented, with sensors throughout the engine to capture pressure, temperature, and heat flux data. This allows us to directly validate thermal models and better understand how these alternative cooling strategies behave at scale.

      As the largest engine we've built so far, GEN6 also helps us gain experience with new design challenges — higher flow rates, larger hardware, and more demanding structural loads.
    `.trim(),
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/lre-gen6.jpg`,
  },
  {
    slug: "lre-gen5",
    status: "ongoing",
    title: "LRE GEN5 | Experimental Cooling",
    categories: ["Propulsion"],
    cardDescription: "",
    summary: `
      **LRE GEN5 is SFU Rocketry’s next step into a higher thrust class** — a 5 kN liquid bipropellant engine designed to evaluate regen cooling methods.

      GEN5 is fully instrumented, with sensors throughout the engine to capture pressure, temperature, and heat flux data. This allows us to directly validate thermal models and better understand how these alternative cooling strategies behave at scale.

      As the largest engine we've built so far, GEN5 also helps us gain experience with new design challenges — higher flow rates, larger hardware, and more demanding structural loads.
    `.trim(),
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/lre-gen5.png`,
  },
  {
    slug: "lre-gen4",
    status: "completed",
    title: "LRE GEN4 | Experimental Cooling",
    categories: ["Propulsion"],
    cardDescription: "LRE GEN 4 integrates experimental film cooling and a new injector geometry into a 3kN rocket engine.",
    summary: `
      LRE GEN 4 builds on the success of GEN 3, reusing the same chamber and fuel system. GEN 4 incorporates **film cooling** and a more advanced impinging injector geometry. 
      
      Impinging injectors create better atomisation of propellant but are harder to design correctly.
    `.trim(),
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/lre-gen4.png`,
  },
  {
    slug: "lre-gen3",
    status: "completed",
    title: "LRE GEN3 | Advanced Telemetry",
    categories: ["Propulsion"],
    cardDescription: "",
    summary: `
      **SFU Rocketry is developing our Liquid Rocket Engine (LRE) GEN3 propulsion system**: a 3 kN, heatsink-cooled engine focused on validating proprietary seal technology designed in-house by SFU Rocketry.

      Keeping thrust chambers sealed is hard. High pressures, extreme cold (-200C) and hot (1200C) temperatures, and aggressive combustion environments challenge even the most robust designs. Our proprietary sealing approach aims to address these challenges with simple, scalable hardware — GEN3 is the testbed to prove it.

      GEN3 features embedded sensors throughout the engine body, enabling real-time measurements of combustion pressures, chamber temperatures, and various forces. This data will allow us to empirically validate high-fidelity simulation models, improving the predictive power of our design tools and accelerating development of future engines.

      GEN3 is planned to be SFU Rocketry’s first public demonstration engine. By showcasing a full static hotfire in front of a live audience of students, professionals, municipal/provincial government officials, and family/friends, our goal is to raise awareness about Rocket Propulsion on the west coast of our country - highlighting Canadian talent in aerospace and inspiring the next generation of engineers.
    `.trim(),
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/lre-gen3.jpg`,
  },
  {
    slug: "silencer",
    status: "completed",
    title: "Engine Acoustics Silencer",
    categories: ["Mechanical", "Propulsion"],
    cardDescription: "",
    summary:`
      SFU Rocketry is developing the **Engine Acoustics Silencer** — a transportable water-deluge-based system designed to dramatically reduce the sound generated during rocket engine testing. Rocket engines can exceed 180 dB during firing, producing dangerous and disruptive levels of acoustic energy. This system allows us to safely operate high-thrust engines in locations that would otherwise be inaccessible due to noise constraints.

      The design centers around a large cylindrical enclosure equipped with high-flow water nozzles that spray directly into the engine plume. The water rapidly cools and disrupts the supersonic exhaust jet, breaking up shock structures and dramatically reducing broadband noise. The cylindrical housing helps further contain and dampen the remaining sound energy.
    `.trim(),
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/silencer.png`,
  },
  {
    slug: "lace-1",
    status: "completed",
    title: "LACE-1 | ISG Propulsion R&D",
    categories: ["Propulsion", "Innovative Solutions Group"],
    cardDescription: "",
    summary:`
      SFU Rocketry is developing LACE — **the Laminated Active Cooling Engine** — a new approach to regenerative cooling built around stackable, CNC-cut plates. By slicing the engine into cross-sectional layers of varying thickness, we can design internal cooling channels directly into each plate. These plates are then assembled, bonded (welded), and finish-machined into a complete thrust chamber with internal flow paths that would be impossible to produce using conventional subtractive methods.

      This approach allows for highly optimized cooling geometries, better thermal performance, and lower manufacturing complexity compared to traditional regenerative cooling. It also makes use of existing in-house fabrication tools like CNC plasma cutting, reducing the cost and turnaround time typically associated with regen engines.

      LACE represents a major step toward high-performance, flight-ready propulsion systems — and serves as a proving ground for advanced cooling designs that will carry over into future mission-class engines.
    `.trim(),
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/lace-1.png`,
  },
  {
    slug: "ablatives",
    status: "completed",
    title: "Ablatives | ISG Materials R&D",
    categories: ["Mechanical", "Innovative Solutions Group"],
    cardDescription: "",
    summary:`
      SFU Rocketry is researching and developing custom thermally insulative and ablative materials to use in heat shielding and the construct propulsion system parts. Our goal is to lower the manufacturing cost and complexity of actively cooled engines by developing engine designs using novel ablative materials. 
    `.trim(),
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/ablatives.jpg`,
  },
  {
    slug: "power-systems",
    status: "ongoing",
    title: "Power, Battery, and BMS Systems",
    categories: ["Hardware"],
    cardDescription: "",
    summary:`
      All of SFU Rocketry's hardware projects require reliable power systems that can handle special requirements related to weight, high-power delivery, modularity, temperature, and weather resistance. We address these requirements by designing and building custom batteries, battery management PCBs, power converters, and the accompanying validation equipment such as dynamic loads and analyzers. 
    `.trim(),
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/power-systems.jpg`,
  },
  {
    slug: "cryo",
    status: "completed",
    title: "CRYO | ISG Sensors R&D",
    categories: ["Mechanical", "Hardware", "Software", "Innovative Solutions Group"],
    cardDescription: "",
    summary:`
      All SFU Rocketry engines have used liquid oxygen (LOX), which is transported from a large supply tank into the Test Stand tanks before firing. LOX is a pure oxidizer, and a cryogenic near absolute zero, which makes it challenging and high-risk to work with. In order to monitor the status of the tanks when filling and while firing, our Cryogenic Systems Module team is developing a LOX-safe capacitance sensor and processing module to ensure our LOX tanks are filled and operated correctly. 
    `.trim(),
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/cryo.jpg`,
  },
  {
    slug: "venturi",
    status: "completed",
    title: "Venturi Flowmeters | ISG Sensors R&D",
    categories: ["Propulsion", "Mechanical", "Innovative Solutions Group"],
    cardDescription: "",
    summary:`
      SFU Rocketry is developing in-house designed Venturi Flowmeters, a breakthrough in cost-effective precision fluid measurement to support propulsion system feedback and control. Tailored specifically for rocketry applications, these flowmeters exemplify our dedication to self-reliance and technical advancement. Their innovative designs ensure accurate and reliable measurements of fluid flow, crucial for optimizing engine performance, while costing less than 10% of equivalent commercial options. Compact and efficient, the Venturi Flowmeters are pivotal tools in our mission to build larger and more powerful engines capable of reaching the upper atmosphere. 
    `.trim(),
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/venturi.jpg`,
  },
  {
    slug: "ecs-2",
    status: "completed",
    title: "ECS-2 | Engine Control System",
    categories: [],
    cardDescription: "The second generation of our ECS - electronics, firmware, and software that controls the safe and successful ignition and firing of a Propulsion System.",
    summary: "The second generation of our ECS - electronics, firmware, and software that controls the safe and successful ignition and firing of a Propulsion System.",
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/ecs-2.jpg`,
  },
  {
    slug: "lre-gen2",
    status: "completed",
    title: "LRE GEN2 | Ablatives Engine",
    categories: ["Propulsion"],
    cardDescription: "A 3kN liquid rocket engine made from wood composite ablative material - a leap towards sustainable rocket propulsion.",
    summary: "A 3kN liquid rocket engine made from wood composite ablative material - a leap towards sustainable rocket propulsion.",
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/lre-gen2.jpg`,
  },
  {
    slug: "tvc",
    status: "completed",
    title: "Thrust Vector Control",
    categories: ["Mechanical", "Hardware", "Software"],
    cardDescription: "Thrust Vector Control uses advanced feedback control loops and robust actuators to steer our engines via the manipulation of the direction of thrust.",
    summary: "Thrust Vector Control uses advanced feedback control loops and robust actuators to steer our engines via the manipulation of the direction of thrust.",
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/tvc.png`,
  },
  {
    slug: "obc-1",
    status: "completed",
    title: "OBC-1 | High Altitude Payload",
    categories: ["Hardware", "Software", "Mechanical"],
    cardDescription: "The first-generation flight computer and RF payload, sent to 27km in altitude and retrieved 250km from the launch site.",
    summary: "The first-generation flight computer and RF payload, sent to 27km in altitude and retrieved 250km from the launch site.",
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/obc-1.jpg`,
  },
  {
    slug: "lre-gen1",
    status: "completed",
    title: "LRE GEN1 | Liquid Rocket Engine",
    categories: ["Propulsion"],
    cardDescription: "SFU Rocketry’s first Liquid Rocket Engine - a 3kN heatsink engine with supporting fluids systems.",
    summary: "SFU Rocketry’s first Liquid Rocket Engine - a 3kN heatsink engine with supporting fluids systems.",
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/lre-gen1.jpg`,
  },
  {
    slug: "spark-igniter",
    status: "completed",
    title: "Augmented Spark Igniter",
    categories: ["Propulsion"],
    cardDescription: "The small rocket engine that ignites the big rocket engine.",
    summary: "The small rocket engine that ignites the big rocket engine.",
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/spark-igniter.jpg`,
  },
  {
    slug: "test-stand",
    status: "completed",
    title: "Test Stand Structure",
    categories: ["Mechanical"],
    cardDescription: "The structural system that safely supports rocket engines and fluids systems, while bracing against large forces.",
    summary: "The structural system that safely supports rocket engines and fluids systems, while bracing against large forces.",
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/test-stand.jpg`,
  },
  {
    slug: "ecs-1",
    status: "completed",
    title: "ECS-1 | Engine Control System",
    categories: ["Hardware", "Software"],
    cardDescription: "The electronics, firmware, and software that controls the safe and successful ignition and firing of a Propulsion System.",
    summary: "The electronics, firmware, and software that controls the safe and successful ignition and firing of a Propulsion System.",
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/ecs-1.jpg`,
  },
  {
    slug: "cots-rocket",
    status: "completed",
    title: "10km COTS High Power Rocket",
    categories: ["Mechanical", "Propulsion"],
    cardDescription: "",
    summary: "",
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/cots-rocket.jpg`,
  },
  {
    slug: "cots-rocket-avionics",
    status: "completed",
    title: "10km COTS Rocket Avionics System",
    categories: ["Hardware", "Software"],
    cardDescription: "",
    summary: "",
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/cots-rocket-avionics.png`,
  },
  {
    slug: "hybrid-engine",
    status: "completed",
    title: "Hybrid Rocket Engine",
    categories: ["Propulsion"],
    cardDescription: "",
    summary: "",
    image_caption: "",
    image: `${import.meta.env.BASE_URL}images/projects/hybrid-engine.png`,
  },
];
