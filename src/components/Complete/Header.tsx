import React from "react";
import styled from "styled-components";
import useStores from "../../hooks/useStores";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex: 1;
  cursor: pointer;
`;
const CloseBox = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  align-items: center;
  padding: 41px 36px 165px;
`;

const CloseText = styled.span`
  font-family: SpoqaHanSans-Bold;
  font-size: 22px;
  color: #a9afb3;
  letter-spacing: 0;
  text-align: right;
  line-height: 22px;
  padding-top: 4px;
  padding-right: 11px;
`;

const BackIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const Header = () => {
  const history = useHistory();
  const {
    numpadStore: { ResetStore },
  } = useStores();

  const _handleGoBack = () => {
    ResetStore();
    history.push("/");
  };

  return (
    <Container onClick={() => _handleGoBack()}>
      <CloseBox>
        <CloseText>나가기</CloseText>
        <BackIcon src={require("../../assets/ic_close.svg")} alt="나가기" />
      </CloseBox>
    </Container>
  );
};

export default Header;
