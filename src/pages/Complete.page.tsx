import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Complete/Header";
import DisplayPoint from "../components/Complete/DisplayPoint";

const Container = styled.div``;

const Complete = () => {
  return (
    <Container>
      <Header />
      <DisplayPoint />
    </Container>
  );
};

export default Complete;
