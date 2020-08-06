import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Main/Header";
import DisplayNumber from "../components/Display/DisplayNumber";
import NumberPad from "../components/Main/NumPad";

const Container = styled.div``;

const MainPage = () => {
  return (
    <Container>
      <Header />
      <DisplayNumber />
      <NumberPad />
    </Container>
  );
};

export default MainPage;
