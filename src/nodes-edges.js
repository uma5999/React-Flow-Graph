const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export const initialNodes = [
  {
    id: "INPUT",
    type: "input",
    data: { label: "Input" },
    position: {}
  },
  {
    id: "GALAXY",
    data: { label: "GALAXY" },
    position: {}
  },
  {
    id: "SDS",
    data: { label: "SDS" },
    position: {}
  },
  {
    id: "MSD",
    data: { label: "MSD" },
    position: {}
  },
  {
    id: "OUTPUT",
    type: "output",
    data: { label: "Output" },
    position: {}
  }
];

export const initialEdges = [
  {
    id: "ein-gal",
    source: "INPUT",
    target: "GALAXY",
    type: edgeType,
    animated: true
  },
  {
    id: "gal-sds",
    source: "GALAXY",
    target: "SDS",
    type: edgeType,
    animated: true
  },
  {
    id: "gal-msd",
    source: "GALAXY",
    target: "MSD",
    type: edgeType,
    animated: true
  },
  {
    id: "sds-msd",
    source: "SDS",
    target: "MSD",
    type: edgeType,
    animated: true
  },
  // { id: 'sds-msd', source: 'SDS', target: 'OUTPUT', type: edgeType, animated: true },
  {
    id: "msd-out",
    source: "MSD",
    target: "OUTPUT",
    type: edgeType,
    animated: true
  }
];
