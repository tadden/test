import styled from "styled-components";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <Wrapper>
      <Content>
        <ColorRing
          visible={true}
          height="180"
          width="180"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </Content>
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled("div")`
  text-align: center;
`;

const Content = styled("span")``;
