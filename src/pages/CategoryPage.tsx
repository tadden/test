import { useQuery } from "react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCatsById } from "../API/Api";
import { ICats } from "../types/Items";
import Sidebar from "../components/Sidebar/Sidebar";
import Cats from "../components/Cats/Cats";
import styled from "styled-components";
import Error from "../components/Error";

const CategoryPage = () => {
  const [page, setPage] = useState(0);

  const { id } = useParams();

  const { isError, isLoading, data, error } = useQuery<ICats[]>(
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
      <ContentWrapper>
        <Sidebar />
        <Cats isLoading={isLoading} cats={data} />
      </ContentWrapper>
      <ButtonWrapper>
        <Button onClick={handleDecrementPage} disabled={page === 0}>
          Prev page
        </Button>
        <Button onClick={handleIncrementPage}>Next page</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CategoryPage;

const Wrapper = styled("div")``;

const ContentWrapper = styled("div")``;

const ButtonWrapper = styled("div")``;

const Button = styled("button")``;
