import { Link, useParams } from "react-router-dom";
import styled from "styled-components/macro";

type Props = {
  id: number;
  name: string;
  isActive: boolean;
};

const SideBarItem = ({ id, name, isActive }: Props) => {
  return (
    <Wrapper>
      <NavItem isActive={isActive}>
        <NavLink to={`/${id}`}>{name}</NavLink>
      </NavItem>
    </Wrapper>
  );
};

export default SideBarItem;

const Wrapper = styled("div")`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const NavItem = styled("li")<{ isActive: boolean }>`
  text-transform: uppercase;
  padding: 10px;
  background-color: ${(props) => props.isActive && "#f7e860"};

  &:hover {
    background-color: #f7e860;
  }
`;

const NavLink = styled(Link)`
  color: #ffff;
`;
