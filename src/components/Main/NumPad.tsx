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

const NumPad: FC = () => {
  const _keypadCount = 12;

  // 넘버 패드 렌더링
  const renderKeyPad = () => {
    let list = [];
    for (let i = 0; i < _keypadCount; i++) {
      if (i === 9) {
        list.push(<BackButton key={i} />);
      } else if (i === 10) {
        list.push(<NumberButton key={i} numberValue={i - 1} />);
      } else if (i === 11) {
        list.push(<SaveButton key={i} />);
      } else {
        list.push(<NumberButton key={i} numberValue={i} />);
      }
    }

    return list;
  };

  return <Container>{renderKeyPad()}</Container>;
};

export default NumPad;
