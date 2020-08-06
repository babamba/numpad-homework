import React, { FC } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import useStores from "../../hooks/useStores";

const Conatiner = styled.div`
  padding: 41px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DisplayContent = styled.span`
  font-family: "SpoqaHanSans-Regular";
  font-size: 56px;
  color: #4d5256;
  letter-spacing: 0;
  text-align: center;
  line-height: 84px;
`;

const DisplayNumber: FC = () => {
  const {
    numpadStore: { hypenNumber, useMaskingMode },
  } = useStores();

  const masking = (hypenNumber: string) => {
    let strArr = hypenNumber.split("-");

    // 010 이후로 번호가 있다면.
    if (strArr.length > 1) {
      // 구분자를 통한 slice 로 쪼개진 배열길이만큼
      let replaceArr = strArr.map((item, idx) => {
        if (idx === 0) {
          return item;
        } else {
          if (item.length > 0) {
            let replace = "";
            for (const str of item) {
              // 숫자 개수만큼 *처리
              replace = replace + "*";
            }
            return replace;
          }
        }
      });
      // 하이픈 구분자 첨부하여 다시 하나로 합치고 리턴
      return replaceArr.join("-");
    } else {
      // 010 앞부분 밖에 번호가 없을땐 그대로 리턴
      return hypenNumber;
    }
  };

  return (
    <Conatiner>
      <DisplayContent>
        {/*
         * store 의 마스킹 모드 상태가 on일떄는 마스킹처리하여 보여주고
         * off 일때는 그냥 보여준다.
         */}
        {useMaskingMode ? masking(hypenNumber) : hypenNumber}
      </DisplayContent>
    </Conatiner>
  );
};

export default observer(DisplayNumber);
