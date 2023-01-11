import { useQuery } from "react-query";
import { ICategories } from "../../../types/Categories";
import { getCategories } from "../../../API/Api";
import Item from "../SidebarItem/SidebarItem";
import styled from "styled-components";
import Error from "../../Error";

const Sidebar = () => {
  const { isError, data, error } = useQuery<ICategories[]>(
    ["categories"],
    getCategories
  );

  if (isError) {
    console.log("Error", error);
    return <Error />;
  }

  return (
    <Wrapper>
      <SideBarList>
        {data?.map(({ name, id }) => (
          <Item name={name} id={id} />
        ))}
      </SideBarList>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled("div")``;

const SideBarList = styled("ul")``;
