import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Routes from "./route/Route";
import Toast from "./components/Toast/Toast";

const Container = styled.div`
  width: 633px; /* 정렬하려는 요소의 넓이를 반드시 지정 */
  margin: 0 auto;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Toast />
      <Routes />
    </Container>
  );
}

export default App;
