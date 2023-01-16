import { useQuery } from "react-query";
import { getRandomCats } from "../API/Api";
import { Items } from "../types/Items";
import styled from "styled-components/macro";
import Sidebar from "../components/Sidebar/Sidebar/Sidebar";
import Cats from "../components/Cats/Cats/Cats";
import Error from "../components/Error/Error";

const HomePage = () => {
  const { isError, isLoading, data, error, refetch, isFetching } = useQuery<
    Items[]
  >(["cats"], getRandomCats);

  const handleRandomClick = () => {
    refetch();
  };

  if (isError) {
    console.log("Error", error);
    return <Error />;
  }

  return (
    <>
      <Sidebar />
      <BtnWrapper>
        <RandomBtn onClick={handleRandomClick}>Randomize</RandomBtn>
      </BtnWrapper>

      <Cats isFetching={isFetching} isLoading={isLoading} cats={data} />
    </>
  );
};

export default HomePage;

const BtnWrapper = styled("div")`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const RandomBtn = styled("button")`
  text-transform: uppercase;
  font-weight: bold;
  color: #ffbc1f;
  width: 140px;
  height: 40px;
  background-color: transparent;
  border: 2px solid #ffbc1f;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #ffbc1f;
    color: white;
  }
`;
