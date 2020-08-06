import React, { FC } from "react";
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
const NumberBox = styled.div`
  width: 76px;
  height: 66px;
  text-align: center;
`;
const NumberText = styled.span`
  font-family: "SpoqaHanSans-Regular";
  font-size: 56px;
  color: #4d5256;
  letter-spacing: 0;
  text-align: center;
  line-height: 84px;
  min-width: 66px;
`;

interface Props {
  numberValue: number;
  // clickNumber: Function;
}

const NumberButton: FC<Props> = (props) => {
  const {
    numpadStore: { AddNumber, DeleteNUmber },
  } = useStores();

  const { numberValue } = props;
  return (
    <Container onClick={() => AddNumber(numberValue)}>
      <NumberBox>
        <NumberText>{numberValue}</NumberText>
      </NumberBox>
    </Container>
  );
};

export default NumberButton;
