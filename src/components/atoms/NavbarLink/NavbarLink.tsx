import Link from "next/link"

interface INavbarLink {
  label: string
  active: boolean
  link: string
}

export const NavbarLink = (props: INavbarLink) => {
  return (
    <Link 
      data-testid="link" 
      href={props.link} 
      className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:underline ` +
       `md:hover:underline-offset-8 md:text-white md:p-0 font-barlow uppercase hover:bg-neutral-900 ` +
       `${props.active ? 'font-bold' : 'font-regular'}`}
    >
      {props.label}
    </Link>
  );
}