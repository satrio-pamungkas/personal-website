import { IPlatformList } from ".";
import { FaLinkedin, FaInstagram, FaGithub, FaDribbble } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


export const platformLists: IPlatformList[] = [
  {
    id: 1,
    link: "",
    icon: <FaLinkedin color="white" className="text-xl md:text-3xl" />
  },
  {
    id: 2,
    link: "",
    icon: <FaInstagram color="white" className="text-xl md:text-3xl" />
  },
  {
    id: 3,
    link: "",
    icon: <HiOutlineMail color="white" className="text-xl md:text-3xl" />
  },
  {
    id: 4,
    link: "",
    icon: <FaGithub color="white" className="text-xl md:text-3xl" />
  },
  {
    id: 5,
    link: "",
    icon: <FaDribbble color="white" className="text-xl md:text-3xl"/>
  },
]