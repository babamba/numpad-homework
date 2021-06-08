import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useStores from "../hooks/useStores";
import Header from "../components/Main/Header";
import DisplayNumber from "../components/Display/DisplayNumber";
import NumberPad from "../components/Main/NumPad";

const Container = styled.div``;

const MainPage = () => {
  const {
    numpadStore: { OnKeyAddNumber, DeleteNumber },
  } = useStores();

  const _handleOnkeyPress = (event: any) => {
    const { keyCode } = event;
    // 아스키 코드 0 ~ 9 에 해당될떄 스토어의 함수를 실행한다.
    if (keyCode > 47 && keyCode < 59) {
      OnKeyAddNumber(keyCode);
    } else if (keyCode === 8) {
      // backspace 버튼 입력시 삭제
      DeleteNumber();
    }
  };

  // 화면이 didmount 될때 이벤트리스너를 등록
  useEffect(() => {
    window.addEventListener("keydown", _handleOnkeyPress, true);
    return () => {
      // 화면이 unmount 될때 이벤트리스너를 제거
      window.removeEventListener("keydown", _handleOnkeyPress, true);
    };
  }, []);
  return (
    <Container>
      <Header />
      <DisplayNumber />
      <NumberPad />
    </Container>
  );
};

export default MainPage;
