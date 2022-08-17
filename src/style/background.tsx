import styled from "styled-components";

const BackGround = styled.div`
  background-color: ${({theme}) => theme.mode.mainBackground};
  border: 1px solid transparent;
  transition: 0.3s;
  height: 100%;
  overflow-y: scroll;
`;

export default BackGround;
