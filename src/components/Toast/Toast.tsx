import React, { useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import useStores from "../../hooks/useStores";

const AlertBox = styled.div`
  position: absolute;
  width: inherit;
  height: 88px;
  /* opacity: 0.9; */
  opacity: ${(props: ErrorProps) => (props.visible ? 0.9 : 0)};
  background: #292a2b;
  text-align: center;
  display:flex;
  /* display: ${(props: ErrorProps) => (props.visible ? "flex" : "none")}; */
  justify-content: center;
  align-items: center;
  flex: 1;
  z-index: ${(props: ErrorProps) => (props.visible ? 2 : 1)}; 
  transition: .3s;
  /* transform: ${(props: ErrorProps) =>
    props.visible ? "translateY(0px)" : "translateY(-90px)"}; */
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

const Toast = () => {
  const {
    numpadStore: { hasError, SetError, errorMsg },
  } = useStores();

  useEffect(() => {
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
    <AlertBox visible={hasError}>
      <AlertText>{errorMsg}</AlertText>
    </AlertBox>
  );
};

export default observer(Toast);
