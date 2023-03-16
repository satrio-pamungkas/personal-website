interface INavbarLink {
  label: string
}

export const NavbarLink = (props: INavbarLink) => {
  return (
    <a className="font-bold">{props.label}</a>
  );
}