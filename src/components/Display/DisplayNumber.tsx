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

interface Props {
  //   value: string;
}

const DisplayNumber: FC<Props> = (props) => {
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
      // 구분자 다시 처리하여 리턴
      console.log("replaceArr : ", replaceArr.join("-"));
      return replaceArr.join("-");
    } else {
      // 010 앞부분밖에 번호가 없을땐 그대로 리턴
      return hypenNumber;
    }
  };

  return (
    <Conatiner>
      <DisplayContent>
        {useMaskingMode ? masking(hypenNumber) : hypenNumber}
      </DisplayContent>
    </Conatiner>
  );
};

export default observer(DisplayNumber);
