interface INavbarLink {
  label: string
}

export const NavbarLink = (props: INavbarLink) => {
  return (
    <a href="" className="block py-2 pl-3 pr-4 text-white 
      bg-blue-700 rounded md:bg-transparent md:text-white 
      md:p-0 font-barlow uppercase"
    >
      {props.label}
    </a>
  );
}