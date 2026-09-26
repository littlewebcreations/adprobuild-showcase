import extensionImg from "@/assets/project-extension.jpg";
import stoneworkImg from "@/assets/project-stonework.jpg";
import loftImg from "@/assets/project-loft.jpg";
import drivewayImg from "@/assets/project-driveway.jpg";
import renderingImg from "@/assets/project-rendering.jpg";
import renovationImg from "@/assets/project-renovation.jpg";
import garageImg from "@/assets/project-garage.jpg";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  duration: string;
  summary: string;
  description: string[];
  scope: string[];
  image: string;
};

export const projects: Project[] = [
  {
    slug: "rear-extension-mold",
    title: "Single-Storey Rear Extension",
    location: "Mold, Flintshire",
    category: "Extensions",
    duration: "10 weeks",
    summary:
      "A brick-matched rear extension with wide sliding doors, turning a dark kitchen into a bright family space.",
    description: [
      "The owners wanted a bigger kitchen-diner without losing the character of their semi. We matched the existing brickwork course for course so the new build reads as part of the original house.",
      "We handled everything from footings to final plaster: drainage, steelwork, roofing, first and second fix, and decoration-ready plastering throughout.",
    ],
    scope: ["Footings & drainage", "Brick-matched external walls", "Steel installation", "Roof & leadwork", "Plastering & second fix"],
    image: extensionImg,
  },
  {
    slug: "stone-wall-llangollen",
    title: "Stone Boundary Wall & Entrance",
    location: "Llangollen",
    category: "Stonework & Brickwork",
    duration: "3 weeks",
    summary:
      "A collapsed boundary wall rebuilt in local stone with hand-cut coping, restoring the entrance to a period property.",
    description: [
      "The original wall had bowed and collapsed after years of water damage. We took it down to sound footings and rebuilt it in local stone to match the surrounding lanes.",
      "Every coping stone was cut by hand on site, and the joints were struck flush for a crisp, traditional finish that will shed water for decades.",
    ],
    scope: ["Demolition & footings", "Local stone selection", "Hand-cut coping stones", "Traditional struck joints", "Gateway re-setting"],
    image: stoneworkImg,
  },
  {
    slug: "loft-conversion-oswestry",
    title: "Loft Conversion with Skylights",
    location: "Oswestry",
    category: "Loft Conversions",
    duration: "8 weeks",
    summary:
      "A dark attic transformed into a bright double bedroom with large skylights, new staircase and full insulation.",
    description: [
      "This terraced house needed an extra bedroom without eating into the garden. A loft conversion added a full double room with eaves storage and a skylight over the new stairwell.",
      "We installed the steels, floor joists, staircase, insulation and plasterboard, then plastered and finished the room ready for decoration.",
    ],
    scope: ["Structural steels & joists", "New staircase", "Skylight installation", "Full insulation", "Plastering & finish"],
    image: loftImg,
  },
  {
    slug: "driveway-wrexham",
    title: "Block-Paved Driveway",
    location: "Wrexham",
    category: "Driveways",
    duration: "1 week",
    summary:
      "A tired front garden replaced with a charcoal block-paved driveway, new edging and proper drainage.",
    description: [
      "The old gravel frontage was muddy and awkward to park on. We excavated, laid a compacted sub-base and finished with charcoal block paving and a contrasting border.",
      "Drainage channels at the threshold keep surface water away from the house, and the new layout comfortably takes two cars.",
    ],
    scope: ["Excavation & sub-base", "Charcoal block paving", "Contrasting border edging", "Threshold drainage", "Two-car layout"],
    image: drivewayImg,
  },
  {
    slug: "rendering-chester",
    title: "Full External Re-Render",
    location: "Chester",
    category: "Rendering & Plastering",
    duration: "2 weeks",
    summary:
      "Cracked, blown render stripped back and replaced with a smooth modern finish, transforming the kerb appeal.",
    description: [
      "The existing render had blown in several places and was letting water behind it. We hacked it all off, repaired the substrate and applied a fresh through-colour render system.",
      "The smooth white finish with crisp window reveals has completely changed the look of the house — and it no longer needs painting every few years.",
    ],
    scope: ["Strip blown render", "Substrate repairs", "Through-colour render system", "Crisp window reveals", "Maintenance-free finish"],
    image: renderingImg,
  },
  {
    slug: "renovation-rhosllanerchrugog",
    title: "Full House Renovation",
    location: "Rhosllanerchrugog, Wrexham",
    category: "Renovations",
    duration: "14 weeks",
    summary:
      "A tired terrace opened up into a modern open-plan home, with structural work, new kitchen and full replaster.",
    description: [
      "This whole-house renovation took a dated terrace back to brick and rebuilt it around a light, open-plan kitchen-diner with an exposed brick feature wall.",
      "Our team managed the structural openings, steelwork, plumbing, plastering, joinery and tiling — one crew, one point of contact, start to finish.",
    ],
    scope: ["Structural openings & steels", "Full replaster", "Kitchen fit-out", "Plumbing & electrics coordination", "Joinery & tiling"],
    image: renovationImg,
  },
  {
    slug: "garage-conversion-rhosllanerchrugog",
    title: "Garage to Garden Studio",
    location: "Rhosllanerchrugog, Wrexham",
    category: "Garage Conversions",
    duration: "9 weeks",
    summary:
      "An unused double garage rebuilt as a warm, light-filled garden studio with insulated walls and new floor.",
    description: [
      "The garage was cold storage for things nobody used. We insulated the walls and floor, replaced the up-and-over door with a window wall, and created a year-round studio space.",
      "With a brick accent wall, new electrics and a proper finish throughout, it's now the most-used room in the house.",
    ],
    scope: ["Wall & floor insulation", "Window wall installation", "New electrics", "Brick feature wall", "Plastering & finish"],
    image: garageImg,
  },
];

export const categories = [
  "All",
  "Renovations",
  "Extensions",
  "Loft Conversions",
  "Garage Conversions",
  "Stonework & Brickwork",
  "Driveways",
  "Rendering & Plastering",
];

export const services = [
  { name: "Renovations", blurb: "Full house renovations, structural work and modernisation, managed start to finish." },
  { name: "Extensions", blurb: "Single and double-storey extensions, brick-matched and built to building regs." },
  { name: "Garage Conversions", blurb: "Turn unused garages into warm, liveable rooms, studios and offices." },
  { name: "Loft Conversions", blurb: "Extra bedrooms and studies under the roof, with stairs, steels and skylights." },
  { name: "Landscaping", blurb: "Gardens, patios, turfing, fencing and outdoor spaces built to last." },
  { name: "Driveways", blurb: "Block paving, edging and drainage for driveways that stay smart for years." },
  { name: "Stonework & Brickwork", blurb: "Our speciality — walls, chimneys, fireplaces and restoration in brick and stone." },
  { name: "Rendering & Plastering", blurb: "External render systems and flawless internal plastering, ready to decorate." },
  { name: "General Building", blurb: "Groundwork, drainage, roofing, joinery and everything in between." },
];

export const serviceAreas = [
  "Wrexham",
  "Chester",
  "Mold",
  "Oswestry",
  "Shrewsbury",
  "Llangollen",
  "Whitchurch",
  "Tarporley",
  "Nantwich",
  "Altrincham",
  "Ellesmere Port",
  "Manchester",
  "Knutsford",
];

export const contact = {
  andrew: { name: "Andrew", phone: "07749 113 575", tel: "+447749113575" },
  david: { name: "David", phone: "07359 492 283", tel: "+447359492283" },
  email: "info@adprobuild.co.uk",
  whatsapp: "https://wa.me/447749113575",
  address: "38 Maes Y Ficerdy, Rhosllanerchrugog, Wrexham LL14 2EJ",
  companyNumber: "14930997",
};
