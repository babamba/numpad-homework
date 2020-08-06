import React from "react";
import styled from "styled-components";
import useStores from "../../hooks/useStores";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px 65px;
  border: 1px solid #ced3d6;
  &:active {
    background: #eaedef;
    box-shadow: inset 0 2px 2px 0 rgba(0, 0, 0, 0.07);
  }
`;
const Text = styled.span`
  font-family: "SpoqaHanSans-Regular";
  font-size: 56px;
  color: #4d5256;
  letter-spacing: 0;
  text-align: center;
  line-height: 84px;
  min-width: 76px;
`;

const BackArrow = styled.img`
  width: 42px;
  height: 34px;
`;

const BackButton = () => {
  const {
    numpadStore: { DeleteNumber },
  } = useStores();

  return (
    <Container onClick={() => DeleteNumber()}>
      <BackArrow src={require("../../assets/back-icon.png")} alt="지우기" />
    </Container>
  );
};

export default BackButton;
