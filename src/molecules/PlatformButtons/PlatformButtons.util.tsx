import { IPlatformList } from ".";
import { FaLinkedin, FaInstagram, FaGithub, FaDribbble } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


export const platformLists: IPlatformList[] = [
  {
    id: 1,
    link: "https://id.linkedin.com/in/muhammadraihanspp",
    icon: <FaLinkedin color="white" className="text-xl md:text-3xl" />
  },
  {
    id: 2,
    link: "https://www.instagram.com/muhammadraihanspp/",
    icon: <FaInstagram color="white" className="text-xl md:text-3xl" />
  },
  {
    id: 3,
    link: "mailto:muhammadraihanspp@gmail.com",
    icon: <HiOutlineMail color="white" className="text-xl md:text-3xl" />
  },
  {
    id: 4,
    link: "https://github.com/satrio-pamungkas",
    icon: <FaGithub color="white" className="text-xl md:text-3xl" />
  },
  {
    id: 5,
    link: "",
    icon: <FaDribbble color="white" className="text-xl md:text-3xl"/>
  },
]