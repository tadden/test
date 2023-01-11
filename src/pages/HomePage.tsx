import { useQuery } from "react-query";
import { getRandomCats } from "../API/Api";
import { ICats } from "../types/Items";
import Sidebar from "../components/Sidebar/Sidebar";
import Cats from "../components/Cats/Cats";
import styled from "styled-components";
import Error from "../components/Error";

const HomePage = () => {
  const { isError, isLoading, data, error } = useQuery<ICats[]>(
    ["cats"],
    getRandomCats
  );

  if (isError) {
    console.log("Error", error);
    return <Error />;
  }

  return (
    <Wrapper>
      <Sidebar />
      <Cats isLoading={isLoading} cats={data} />
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled("div")``;
