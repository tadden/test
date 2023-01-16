import { useQuery } from "react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCatsById } from "../API/Api";
import { Items } from "../types/Items";
import styled from "styled-components/macro";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Error from "../components/Error/Error";
import Sidebar from "../components/Sidebar/Sidebar/Sidebar";
import Cats from "../components/Cats/Cats/Cats";

const CategoryPage = () => {
  const [page, setPage] = useState(0);

  const { id } = useParams();

  const { isError, isLoading, data, error, isRefetching } = useQuery<Items[]>(
    ["cats", id, page],
    () => getCatsById(id, page)
  );

  const handleIncrementPage = () => {
    setPage((page) => page + 1);
  };
  const handleDecrementPage = () => {
    setPage((page) => page - 1);
  };

  if (isError) {
    console.log(error);
    return <Error />;
  }

  return (
    <>
      <Sidebar />

      <Cats isRefetching={isRefetching} isLoading={isLoading} cats={data} />

      <ButtonWrapper>
        <Button onClick={handleDecrementPage} disabled={page === 0}>
          <FiChevronLeft />
        </Button>
        <Button onClick={handleIncrementPage}>
          <FiChevronRight />
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default CategoryPage;

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
