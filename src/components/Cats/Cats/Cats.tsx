import styled from "styled-components";
import { ICats } from "../../../types/Items";
import CatItem from "../CatItem";
import Loader from "../../Loader";

type Props = {
  isLoading: boolean;
  cats: ICats[] | undefined;
};

const Cats = ({ isLoading, cats }: Props) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <CatsList>
        {cats?.map(({ id, url }) => (
          <CatItem id={id} url={url} />
        ))}
      </CatsList>
    </Wrapper>
  );
};

export default Cats;

const Wrapper = styled("div")``;

const CatsList = styled("ul")``;
