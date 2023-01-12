import { useQuery } from "react-query";
import { getRandomCats } from "../API/Api";
import { Items } from "../types/Items";
import styled from "styled-components";
import Error from "../components/Error";
import { Cats, Sidebar } from "../components";

const HomePage = () => {
  const { isError, isLoading, data, error } = useQuery<Items[]>(
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
