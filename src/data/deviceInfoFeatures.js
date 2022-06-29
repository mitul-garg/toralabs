import {
  IoServerSharp,
  IoHardwareChipSharp,
  IoLogoAndroid,
  IoAppsSharp,
  IoCameraSharp,
} from "react-icons/io5";

import { IoMdBatteryCharging } from "react-icons/io";

import { MdSensors, MdOutlineMiscellaneousServices } from "react-icons/md";

export const deviceInfoFeatures = [
  {
    id: 0,
    name: "Hardware",
    desc: "View device hardware information such as the name, model, board, manufacturer, network info, codecs, etc.",
    icon: <IoServerSharp />,
  },
  {
    id: 1,
    name: "System OS",
    desc: "View the details of the Android OS such as the codename, API level, kernel, root access, DRM details, etc.",
    icon: <IoLogoAndroid />,
  },
  {
    id: 2,
    name: "CPU/GPU",
    desc: "View CPU and GPU details such as the processor, supported ABIs, CPU hardware, cores, frequency, GPU name, GPU vendor, GPU renderer, etc.",
    icon: <IoHardwareChipSharp />,
  },
  {
    id: 3,
    name: "Apps",
    desc: "Get complete info about system and installed apps. Export APKs and view certificates.",
    icon: <IoAppsSharp />,
  },
  {
    id: 4,
    name: "Battery",
    desc: "View the details of the battery such as the health, battery level, status, power source, technology, voltage, etc.",
    icon: <IoMdBatteryCharging />,
  },
  {
    id: 5,
    name: "Camera",
    desc: "View in-depth information about the features of the camera present in your device provided by Camera2 API.",
    icon: <IoCameraSharp />,
  },
  {
    id: 6,
    name: "Sensors",
    desc: "View realtime working of your device sensors. Get info of sensor vendor, version and much more.",
    icon: <MdSensors />,
  },
  {
    id: 7,
    name: "Tests",
    desc: "Test the device in and out. It would be handy when buying a smartphone.",
    icon: <MdOutlineMiscellaneousServices />,
  },
];
