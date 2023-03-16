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
      <ul>
        {props.list.map((item) => (
          <li key={item.id}></li>
        ))}
      </ul>
    </div>
  );
}