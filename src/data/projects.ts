import developmentAsset from "@/assets/client/housing-development.webp.asset.json";
import stoneworkAsset from "@/assets/client/stonework-detail.webp.asset.json";
import castleAsset from "@/assets/client/castle-homes.webp.asset.json";
import summerRoomAsset from "@/assets/client/summer-room.webp.asset.json";
import brickworkAsset from "@/assets/client/decorative-brickwork.webp.asset.json";
import gardenAsset from "@/assets/client/garden-finished.webp.asset.json";
import gardenLawnAsset from "@/assets/client/garden-lawn.webp.asset.json";
import gardenProgressAsset from "@/assets/client/garden-progress.webp.asset.json";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  duration?: string;
  summary: string;
  description: string[];
  scope: string[];
  image: string;
  photos: { image: string; alt: string }[];
};

export const projectImages = {
  hero: developmentAsset.url,
  stonework: stoneworkAsset.url,
};

export const projects: Project[] = [
  {
    slug: "four-homes-castle-caereinion",
    title: "Four Brick-Built Homes",
    location: "Castle Caereinion",
    category: "Stonework & Brickwork",
    summary: "Brickwork and foundations for four properties with garages in Castle Caereinion, completed by Andrew and David in 2021/22.",
    description: [
      "This development comprised two bungalows, a four-bedroom house and a five-bedroom house, with garages and chimneys suitable for an open fire or log burner.",
      "Andrew and David undertook the brickwork and foundations before the formation of A&D Probuild Ltd. The photographs show the houses, summer room and decorative brickwork during the project.",
    ],
    scope: ["Foundations", "Brickwork", "Four properties with garages", "Chimneys", "Decorative brickwork"],
    image: castleAsset.url,
    photos: [
      { image: summerRoomAsset.url, alt: "Brick-built summer room with glazed doors at Castle Caereinion" },
      { image: brickworkAsset.url, alt: "Decorative brick detailing beneath a gable at Castle Caereinion" },
    ],
  },
  {
    slug: "fourteen-home-development",
    title: "Mixed 14-Home Development",
    location: "Location not published",
    category: "Stonework & Brickwork",
    duration: "15 months",
    summary: "Brickwork, blockwork and stonework for a mixed development of 14 homes, two garages and three retaining walls.",
    description: [
      "Andrew and David constructed the brickwork, blockwork, stonework and copings for a mix of semi-detached and detached homes. The work included two garages and three retaining walls with incorporated steps.",
      "The client’s existing website records the project as running from July 2020 to the end of October 2021, with a stated duration of 15 months. Andrew and David completed this work before the formation of A&D Probuild Ltd.",
    ],
    scope: ["Brickwork & blockwork", "Stonework details", "Two garages", "Three retaining walls", "Copings & incorporated steps"],
    image: developmentAsset.url,
    photos: [
      { image: stoneworkAsset.url, alt: "Stone facing and window detail on the 14-home development" },
    ],
  },
  {
    slug: "garden-transformation",
    title: "Complete Garden Transformation",
    location: "Location not published",
    category: "Landscaping",
    summary: "A complete garden refurbishment with a fire pit, concrete slab, new fencing with trellises and artificial turf.",
    description: [
      "The client wanted a low-maintenance outdoor space for relaxing and entertaining. Andrew and David refurbished the garden to create a practical space with artificial turf and new boundaries.",
      "The work included a fire pit, concrete slab and new fencing with trellises. These original project photographs show the work in progress and the finished garden.",
    ],
    scope: ["Garden refurbishment", "Fire pit", "Concrete slab", "Fencing & trellises", "Artificial turf"],
    image: gardenAsset.url,
    photos: [
      { image: gardenLawnAsset.url, alt: "Finished artificial lawn and trellis-topped garden fence" },
      { image: gardenProgressAsset.url, alt: "Garden refurbishment in progress with new fencing and brickwork" },
    ],
  },
];

export const categories = [
  "All",
  "Renovations",
  "Extensions",
  "Loft Conversions",
  "Garage Conversions",
  "Landscaping",
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
