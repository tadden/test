import { useQuery } from "react-query";
import { getRandomCats } from "../API/Api";
import { Items } from "../types/Items";
import styled from "styled-components/macro";
import Error from "../components/Error";
import { Cats, Sidebar } from "../components";

const HomePage = () => {
  const { isError, isLoading, data, error, refetch, isFetching } = useQuery<
    Items[]
  >(["cats"], getRandomCats);

  const handleClick = () => {
    refetch();
  };

  if (isError) {
    console.log("Error", error);
    return <Error />;
  }

  return (
    <Wrapper>
      <Sidebar />
      <BtnWrapper>
        <RandomBtn onClick={handleClick}>Randomize</RandomBtn>
      </BtnWrapper>

      <Cats isFetching={isFetching} isLoading={isLoading} cats={data} />
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled("div")``;

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
