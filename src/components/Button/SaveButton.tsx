import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import useStores from "../../hooks/useStores";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #2c5ae9;
  padding: 30px 65px;
  border: 1px solid #2c5ae9;
`;
const Text = styled.span`
  font-family: SpoqaHanSans-Regular;
  font-size: 38px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 57px;
  min-width: 76px;
`;

const SaveButton = () => {
  const history = useHistory();
  const {
    numpadStore: { hypenNumber, SetError, AddPoint },
  } = useStores();

  const handleSubmit = async () => {
    const result = await validation();

    if (result) {
      SetError(false, "");
      await AddPoint(1);
      history.push("/complete");
    }
  };

  const validation = async () => {
    let check = false; // validation check 에서 통과했는지의 Flag 값
    let strArr = hypenNumber.split("-"); // 구분자를 통한 배열생성.(앞번호, 중간번호, 끝번호 체크)
    let replaceHypenNum = strArr.join(""); // 구분자가 없는 문자열.(길이 체크)

    if (strArr.length < 3) {
      if (strArr[0] === "010") {
        SetError(true, "11자리 휴대폰 번호를 입력해주세요.");
      } else {
        SetError(true, "10자리 휴대폰 번호를 입력해주세요.");
      }
    } else if (strArr.length === 3) {
      if (strArr[0] === "010") {
        if (replaceHypenNum.length < 11) {
          SetError(true, "11자리 휴대폰 번호를 정확히 입력해주세요.");
        } else {
          check = true;
        }
      } else {
        if (replaceHypenNum.length < 10) {
          SetError(true, "10자리 휴대폰 번호를 정확히 입력해주세요.");
        } else if (replaceHypenNum.length > 10) {
          SetError(true, "10자리 휴대폰 번호를 정확히 입력해주세요.");
        } else {
          check = true;
        }
      }
    }

    return check;
  };

  return (
    <Container onClick={() => handleSubmit()}>
      <Text>적립</Text>
    </Container>
  );
};

export default observer(SaveButton);
