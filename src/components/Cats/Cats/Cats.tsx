import styled from "styled-components/macro";
import { Items } from "../../../types/Items";
import Loader from "../../Loader/Loader";
import CatItem from "../CatItem/CatItem";

type Props = {
  isLoading: boolean;
  isFetching?: boolean;
  isRefetching?: boolean;
  cats: Items[] | undefined;
};

const Cats = ({ isLoading, isFetching, isRefetching, cats }: Props) => {
  if (isLoading || isFetching || isRefetching) {
    return <Loader />;
  }

  return (
    <CatsList>
      {cats?.map(({ id, url }) => (
        <CatItem key={id} id={id} url={url} />
      ))}
    </CatsList>
  );
};

export default Cats;

const CatsList = styled("ul")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1rem;
  grid-auto-rows: 200px;
  height: 100%;
  width: 100%;
  padding: 0;
  list-style: none;
  overflow: hidden;
`;
