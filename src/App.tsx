import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Routes from "./route/Route";
import { observer } from "mobx-react";
import useStores from "./hooks/useStores";

const Container = styled.div`
  width: 633px; /* 정렬하려는 요소의 넓이를 반드시 지정 */
  margin: 0 auto;
  height: 100vh;
  transition: all 1s;
`;

const AlertBox = styled.div`
  position: absolute;
  width: inherit;
  height: 88px;
  opacity: 0.9;
  background: #292a2b;
  text-align: center;
  display: ${(props: ErrorProps) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex: 1;
  z-index: 2;
`;

const AlertText = styled.span`
  font-family: SpoqaHanSans-Regular;
  font-size: 26px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 33px;
`;

interface ErrorProps {
  visible: Boolean;
}

function App() {
  const {
    numpadStore: { hasError, SetError, errorMsg },
  } = useStores();

  useEffect(() => {
    console.log("hasError : ", hasError);
    if (hasError) showAlert();
  }, [hasError]);

  const showAlert = () => {
    setTimeout(() => {
      closeAlert();
    }, 3000);
  };

  const closeAlert = () => {
    SetError(false);
  };

  return (
    <Container>
      <AlertBox visible={hasError}>
        <AlertText>{errorMsg}</AlertText>
      </AlertBox>
      <Routes />
    </Container>
  );
}

export default observer(App);
