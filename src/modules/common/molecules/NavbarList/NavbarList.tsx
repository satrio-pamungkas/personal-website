import { NavbarLink } from "../../atoms/NavbarLink/NavbarLink";

interface IList {
  id: number,
  label: string,
  link: string
}

interface INavbarList {
  list: IList[]
}

export const NavbarList = (props: INavbarList) => {
  return (
    <div>
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {props.list.map((item) => (
          <li key={item.id}>
            <NavbarLink label={item.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}