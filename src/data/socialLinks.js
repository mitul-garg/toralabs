import { BsLinkedin, BsGithub, BsStackOverflow } from "react-icons/bs";
import { IoLogoGooglePlaystore, IoMailSharp } from "react-icons/io5";

export const socialLinks = [
  {
    id: 0,
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/mrudultora/",
  },
  {
    id: 1,
    icon: <BsGithub />,
    link: "https://github.com/mrudultora",
  },
  {
    id: 2,
    icon: <IoLogoGooglePlaystore />,
    link: "https://play.google.com/store/apps/dev?id=6456574067886363117",
  },
  {
    id: 3,
    icon: <IoMailSharp />,
    link: "info@toralabs.in",
    email: true,
  },
  {
    id: 4,
    icon: <BsStackOverflow />,
    link: "https://stackoverflow.com/users/13476891/mrudul-tora",
  },
];
