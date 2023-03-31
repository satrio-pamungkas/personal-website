import { useRouter } from "next/router";
import { LanguageTab } from "../../molecules/LanguageTab/LanguageTab";
import { NavbarList } from "../../molecules/NavbarList/NavbarList";
import { useState, useEffect } from "react";

interface ILinkLabels {
  id: number 
  label: string 
  link: string 
  active: boolean
}

const linkLabels: ILinkLabels[] = [
  { id: 1, label: "Homepage", link: "/", active: false },
  { id: 2, label: "Projects", link: "/projects", active: false },
  { id: 3, label: "Publications", link: "/publications", active: false },
  { id: 4, label: "Resume", link: "/resume", active: false },
  { id: 5, label: "About Me", link: "/about", active: false }
];

export const Navbar = () => {
  const router = useRouter();
  const [labels, setLabels] = useState<ILinkLabels[]>(linkLabels);

  const routePathChanged = () => {
    const newData = labels.map(obj => {
      if (obj.link == router.pathname) {
        return {...obj, active: true };
      }
      return obj;
    })

    setLabels(newData);
  }

  useEffect(() => {
    routePathChanged();
  }, [])
  
  return (
    <nav className="bg-neutral-900 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div data-testid="navbar-div" className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <h1 className="font-oswald text-2xl text-white"><b>MR</b>SPP</h1>
        </div>
        <div className="flex md:order-2">
          <LanguageTab/>
          <button 
            data-collapse-toggle="navbar-sticky" 
            type="button" 
            className="inline-flex items-center p-2 text-sm text-white
              rounded-lg md:hidden hover:bg-neutral-600 focus:outline-none" 
            aria-controls="navbar-sticky" 
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path 
                fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                clipRule="evenodd">
              </path>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <NavbarList list={labels} />
        </div>
      </div>
    </nav>
  );
}