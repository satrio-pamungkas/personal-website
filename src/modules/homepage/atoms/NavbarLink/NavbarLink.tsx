interface INavbarLink {
  label: string
}

export const NavbarLink = (props: INavbarLink) => {
  return (
    <a>{props.label}</a>
  );
}