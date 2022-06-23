import {
  Aiims,
  ApkExtractor,
  Chemistry,
  DeviceInfo,
  HCVerma,
  JEEAdvanced,
  JEEMains,
  Maths,
  Neet,
  Physics,
} from "../components/Privacy/index";

export const privacyRoutes = [
  {
    id: 0,
    name: "Device Info",
    to: "device-info",
    component: <DeviceInfo />,
  },
  {
    id: 1,
    name: "APK Extractor",
    to: "apk-extractor",
    component: <ApkExtractor />,
  },
  {
    id: 2,
    name: "JEE Main Solved Papers Offline",
    to: "jee-mains",
    component: <JEEMains />,
  },
  {
    id: 3,
    name: "JEE Advanced Solved Papers",
    to: "jee-advanced",
    component: <JEEAdvanced />,
  },
  {
    id: 4,
    name: "NEET Solved Papers Offline",
    to: "neet",
    component: <Neet />,
  },
  {
    id: 5,
    name: "AIIMS Solved Papers Offline",
    to: "aiims",
    component: <Aiims />,
  },
  {
    id: 6,
    name: "Physics Notes for JEE and NEET",
    to: "physics-notes",
    component: <Physics />,
  },
  {
    id: 7,
    name: "Chemistry Notes for JEE & NEET",
    to: "chemistry-notes",
    component: <Chemistry />,
  },
  {
    id: 8,
    name: "Maths Notes for JEE Offline",
    to: "maths-notes",
    component: <Maths />,
  },
  {
    id: 9,
    name: "HC Verma Solutions Offline",
    to: "hc-verma-solutions",
    component: <HCVerma />,
  },
];
