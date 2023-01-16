import { Link } from "react-router-dom";
import styled from "styled-components/macro";

type Props = {
  id: number;
  name: string;
  isActive: boolean;
};

const SideBarItem = ({ id, name, isActive }: Props) => {
  return (
    <Wrapper>
      <NavLink to={`/${id}`} isActive={isActive}>
        {name}
      </NavLink>
    </Wrapper>
  );
};

export default SideBarItem;

const Wrapper = styled("div")`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  width: 100%;
  color: #ffff;
  text-transform: uppercase;
  padding: 20px;
  background-color: ${props => props.isActive && "#849b87"};

  &:hover {
    background-color: #849b87;
  }
`;
