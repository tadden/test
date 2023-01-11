import styled from "styled-components";

type Props = {
  id: string;
  url: string;
};
const CatItem = ({ id, url }: Props) => {
  return (
    <ListItem key={id}>
      <Img src={url} alt={id} />
    </ListItem>
  );
};

export default CatItem;

const ListItem = styled("li")``;

const Img = styled("img")``;
