import styled from "styled-components";
import { Items } from "../../../types/Items";
import CatItem from "../CatItem";
import Loader from "../../Loader";

type Props = {
  isLoading: boolean;
  cats: Items[] | undefined;
};

const Cats = ({ isLoading, cats }: Props) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <CatsList>
        {cats?.map(({ id, url }) => (
          <CatItem key={id} id={id} url={url} />
        ))}
      </CatsList>
    </Wrapper>
  );
};

export default Cats;

const Wrapper = styled("div")``;

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
