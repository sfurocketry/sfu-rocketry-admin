// One object per active project card on the homepage / projects page.
// `image` paths point at /public/images/projects/ — drop the matching
// file in there with the same name (see README in that folder).
export const projects = [
  {
    slug: "lre-gen4",
    title: "LRE GEN4 | Experimental Cooling",
    categories: ["Propulsion"],
    summary:
      "A 10 kN liquid bipropellant engine pushing into a new thrust class, built to test non-traditional cooling methods for future regenerative engine designs.",
    image: `${import.meta.env.BASE_URL}images/projects/lre-gen4.jpg`,
  },
  {
    slug: "lre-gen3",
    title: "LRE GEN3 | Advanced Telemetry",
    categories: ["Propulsion"],
    summary:
      "A 3 kN liquid bi-propellant engine with embedded sensors, used for seal testing, performance modeling, and public demonstrations.",
    image: `${import.meta.env.BASE_URL}images/projects/lre-gen3.jpg`,
  },
  {
    slug: "silencer",
    title: "Engine Acoustics Silencer",
    categories: ["Mechanical", "Propulsion"],
    summary:
      "A transportable water deluge system that reduces engine noise by cutting jet noise and dampening acoustic energy.",
    image: `${import.meta.env.BASE_URL}images/projects/silencer.jpg`,
  },
  {
    slug: "etc",
    title: "Engine Test Cell",
    categories: ["Mechanical", "Propulsion"],
    summary:
      "A permanent, transportable testing facility supporting engines up to 50 kN.",
    image: `${import.meta.env.BASE_URL}images/projects/etc.jpg`,
  },
  {
    slug: "lace-1",
    title: "LACE-1 | ISG Propulsion R&D",
    categories: ["Propulsion", "Innovative Solutions Group"],
    summary:
      "A regeneratively cooled engine built from stacked CNC-cut plates, enabling complex internal cooling geometries.",
    image: `${import.meta.env.BASE_URL}images/projects/lace-1.jpg`,
  },
  {
    slug: "ablatives",
    title: "Ablatives | ISG Materials R&D",
    categories: ["Mechanical", "Innovative Solutions Group"],
    summary:
      "Materials science work developing new thermally insulative and ablative materials for the propulsion system.",
    image: `${import.meta.env.BASE_URL}images/projects/ablatives.jpg`,
  },
  {
    slug: "power-systems",
    title: "Power, Battery, and BMS Systems",
    categories: ["Hardware"],
    summary:
      "Reliable power systems built to handle weight, high-power delivery, modularity, and extreme-weather requirements.",
    image: `${import.meta.env.BASE_URL}images/projects/power-systems.jpg`,
  },
  {
    slug: "cryo",
    title: "CRYO | ISG Sensors R&D",
    categories: ["Mechanical", "Hardware", "Software", "Innovative Solutions Group"],
    summary:
      "A LOX-safe capacitive sensor and processing module that ensures LOX tanks are filled and operated correctly.",
    image: `${import.meta.env.BASE_URL}images/projects/cryo.jpg`,
  },
  {
    slug: "venturi",
    title: "Venturi Flowmeters | ISG Sensors R&D",
    categories: ["Propulsion", "Mechanical", "Innovative Solutions Group"],
    summary:
      "Cost-effective precision fluid measurement supporting propulsion system feedback and control.",
    image: `${import.meta.env.BASE_URL}images/projects/venturi.jpg`,
  },
];
