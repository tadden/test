import styled from "styled-components";

type Props = {
  id: string;
  url: string;
};
const CatItem = ({ id, url }: Props) => {
  return (
    <ListItem>
      <Img src={url} alt={id} />
    </ListItem>
  );
};

export default CatItem;

const ListItem = styled("li")`
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const Img = styled("img")`
  width: 100%;
  height: 100%;
`;
