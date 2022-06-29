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
    name: "Hardware Info",
    desc: "View your device hardware information such as the name, model, board, manufacturer, network info, serial, manufactured date, etc.",
    icon: <IoServerSharp />,
  },
  {
    id: 1,
    name: "Android OS",
    desc: "View the details of the Android OS such as the codename, API level, security patch, bootloader, kernel, root access, root management apps, etc",
    icon: <IoLogoAndroid />,
  },
  {
    id: 2,
    name: "CPU/GPU Info",
    desc: "View CPU and GPU details such as the processor, supported ABIs, CPU hardware, cores, frequency, GPU name, GPU vendor, GPU renderer, etc.",
    icon: <IoHardwareChipSharp />,
  },
  {
    id: 3,
    name: "Installed Apps",
    desc: "With a complete list of installed user and system apps, now you can check in-depth information about the apps on your smartphone.",
    icon: <IoAppsSharp />,
  },
  {
    id: 4,
    name: "Battery Info",
    desc: "View the details of the battery such as the health, battery level, status, power source, technology, voltage, etc.",
    icon: <IoMdBatteryCharging />,
  },
  {
    id: 5,
    name: "Camera Info",
    desc: "View in-depth information about the features of the camera system of your device whether it is dual, triple, quad or other.",
    icon: <IoCameraSharp />,
  },
  {
    id: 6,
    name: "Sensors",
    desc: "Do you wonder about what sensors are available on your smartphone? Don't worry device info can show you exactly what sensor is available on your device.",
    icon: <MdSensors />,
  },
  {
    id: 7,
    name: "Service Tests",
    desc: "Perform service tests on your device hardware and make sure they are working accurately. It would be handy when buying a smartphone.",
    icon: <MdOutlineMiscellaneousServices />,
  },
];
