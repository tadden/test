import { useQuery } from "react-query";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Categories } from "../../../types/Categories";
import { getCategories } from "../../../API/Api";
import Item from "../SidebarItem/SidebarItem";
import styled from "styled-components";
import Error from "../../Error";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { id: urlId } = useParams();

  console.log();

  const { isError, data, error } = useQuery<Categories[]>(
    ["categories"],
    getCategories
  );

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  if (isError) {
    console.log("Error", error);
    return <Error />;
  }

  return (
    <>
      <NavBar>
        <MenuBars to="#">
          <FaBars onClick={handleSidebar} />
        </MenuBars>
      </NavBar>
      <Nav isActive={sidebar}>
        <SideBarList onClick={handleSidebar}>
          <MenuClose to="#">
            <AiOutlineClose onClick={handleSidebar} />
          </MenuClose>
          <ItemWrapper>
            {data?.map(({ name, id }) => (
              <Item
                key={id}
                name={name}
                id={id}
                isActive={id === Number(urlId)}
              />
            ))}
          </ItemWrapper>
        </SideBarList>
      </Nav>
    </>
  );
};

export default Sidebar;

const ItemWrapper = styled("div")`
  margin-top: 40px;
  text-align: center;
`;

const NavBar = styled("div")`
  height: 80px;
  display: flex;

  justify-content: start;
  align-items: center;
`;

const MenuBars = styled(Link)`
  margin-left: 20px;
  font-size: 2rem;
  background: none;
`;

interface INav {
  isActive: boolean;
}

const Nav = styled("nav")<INav>`
  background-color: #f3b86a;
  width: 200px;
  height: 100vh;
  padding: 20px;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isActive ? "0" : "-100")}%;
  transition: ${(props) => (props.isActive ? "350" : "850")}ms;
`;
const SideBarList = styled("ul")``;

const MenuClose = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 2rem;
  background: none;
`;
