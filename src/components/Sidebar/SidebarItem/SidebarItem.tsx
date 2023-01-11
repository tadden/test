import { Link } from "react-router-dom";
import styled from "styled-components/macro";

type Props = {
  id: number;
  name: string;
};

const SideBarItem = ({ id, name }: Props) => {
  return (
    <NavItem>
      <NavLink to={`/${id}`}>{name}</NavLink>
    </NavItem>
  );
};

export default SideBarItem;

const NavItem = styled("li")``;

const NavLink = styled(Link)``;
