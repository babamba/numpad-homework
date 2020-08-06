import React, { FC } from "react";
import styled from "styled-components";
import NumberButton from "../Button/NumberButton";
import SaveButton from "../Button/SaveButton";
import BackButton from "../Button/BackButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 3;
`;

interface NumPadProps {
  //   clickNumber: Function;
  //   removeNumber: Function;
}

const NumPad: FC<NumPadProps> = (props) => {
  //   const { clickNumber } = props;
  return (
    <Container>
      <NumberButton numberValue={0} />
      <NumberButton numberValue={1} />
      <NumberButton numberValue={2} />
      <NumberButton numberValue={3} />
      <NumberButton numberValue={4} />
      <NumberButton numberValue={5} />
      <NumberButton numberValue={6} />
      <NumberButton numberValue={7} />
      <NumberButton numberValue={8} />
      <BackButton />
      <NumberButton numberValue={9} />
      <SaveButton />
    </Container>
  );
};

export default NumPad;
