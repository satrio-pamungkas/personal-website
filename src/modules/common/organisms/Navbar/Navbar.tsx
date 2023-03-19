import { LanguageTab } from "../../molecules/LanguageTab/LanguageTab";
import { NavbarList } from "../../molecules/NavbarList/NavbarList";

const linkLabels = [
  { id: 1, label: "Homepage", link: "/" },
  { id: 2, label: "Projects", link: "/projects" },
  { id: 3, label: "Publications", link: "/publications" },
  { id: 4, label: "Resume", link: "/resume" },
  { id: 5, label: "About Me", link: "/about" }
];

export const Navbar = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div data-testid="navbar-div" className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <h1><b>MR</b>SPP</h1>
        </div>
        <div className="flex md:order-2">
          <LanguageTab/>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <NavbarList list={linkLabels} />
        </div>
      </div>
    </nav>
  );
}