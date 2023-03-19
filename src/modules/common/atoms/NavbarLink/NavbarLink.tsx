interface INavbarLink {
  label: string
}

export const NavbarLink = (props: INavbarLink) => {
  return (
    <a href="" className="block py-2 pl-3 pr-4 text-white 
      bg-blue-700 rounded md:bg-transparent md:text-blue-700 
      md:p-0 dark:text-white"
    >
      {props.label}
    </a>
  );
}