interface INavbarLink {
  label: string
  active: boolean
}

export const NavbarLink = (props: INavbarLink) => {
  return (
    <a 
      data-testid="link" 
      href="" 
      className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:underline ` +
       `md:hover:underline-offset-8 md:text-white md:p-0 font-barlow uppercase hover:bg-neutral-900 ` +
       `${props.active ? 'font-bold' : 'font-regular'}`}
    >
      {props.label}
    </a>
  );
}