import { NavbarLink } from "../../atoms/NavbarLink/NavbarLink";

interface IList {
  id: number,
  label: string,
  link: string
  active: boolean
}

interface INavbarList {
  list: IList[]
}

export const NavbarList = (props: INavbarList) => {
  return (
    <div className="items-center justify-between ">
      <ul className="flex flex-col p-3 m-3 border md:flex-row text-sm
        rounded-xl border-gray-500 bg-neutral-800 md:space-x-8 md:text-sm 
        md:font-medium md:border-0 md:bg-neutral-900"
      >
        {props.list.map((item) => (
          <li key={item.id}>
            <NavbarLink label={item.label} active={item.active} />
          </li>
        ))}
      </ul>
    </div>
  );
}