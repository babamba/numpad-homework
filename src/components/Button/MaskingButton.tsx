import React from "react";
import styled from "styled-components";
import useStores from "../../hooks/useStores";
import { observer } from "mobx-react";

interface CheckBoxProps {
  useMask: Boolean;
}

const CheckBox = styled.div`
  width: 28px;
  height: 28px;
  border: ${(props: CheckBoxProps) =>
    props.useMask ? "2px solid #35D48D" : "2px solid #CED3D6"};
  border-radius: 4px;
  border-radius: 4px;
`;

const CheckIcon = styled.div`
  width: 10px;
  height: 14px;
  color: #35d48d;
  transform: scaleX(-1) rotate(-225deg);
  border-top: 2px solid #35d48d;
  border-right: 2px solid #35d48d;
  margin-left: 7px;
  margin-top: 3px;
`;

const MaskingButton = () => {
  const {
    numpadStore: { useMaskingMode, SetMaskingMode },
  } = useStores();

  return (
    <CheckBox
      useMask={useMaskingMode}
      onClick={() => SetMaskingMode(!useMaskingMode)}
    >
      {useMaskingMode && <CheckIcon />}
    </CheckBox>
  );
};

export default observer(MaskingButton);
