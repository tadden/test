import { useQuery } from "react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCatsById } from "../API/Api";
import { Items } from "../types/Items";
import styled from "styled-components";
import Error from "../components/Error";
import { Cats, Sidebar } from "../components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CategoryPage = () => {
  const [page, setPage] = useState(0);

  const { id } = useParams();

  const { isError, isLoading, data, error } = useQuery<Items[]>(
    ["cats", id, page],
    () => getCatsById(id, page)
  );

  if (isError) {
    console.log(error);
    return <Error />;
  }

  const handleIncrementPage = () => {
    setPage((page) => page + 1);
  };
  const handleDecrementPage = () => {
    setPage((page) => page - 1);
  };

  return (
    <Wrapper>
      <Sidebar />
      <ContentWrapper>
        <Cats isLoading={isLoading} cats={data} />
      </ContentWrapper>
      <ButtonWrapper>
        <Button onClick={handleDecrementPage} disabled={page === 0}>
          <FiChevronLeft />
        </Button>
        <Button onClick={handleIncrementPage}>
          <FiChevronRight />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CategoryPage;

const Wrapper = styled("div")``;

const ContentWrapper = styled("div")``;

const ButtonWrapper = styled("div")`
  margin-top: 20px;
  text-align: center;
`;

const Button = styled("button")`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  font-size: 3rem;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
