import React, { FC, useState, useEffect, useRef } from "react";
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

  const [displayNum, setDisplayNum] = useState(hypenNumber);

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
      setDisplayNum(replaceArr.join("-"));
    } else {
      // 010 앞부분 밖에 번호가 없을땐 그대로 리턴
      setDisplayNum(hypenNumber);
    }
  };

  useEffect(() => {
    const current = displayNum.split("-").join("").length; // 변경된 값
    const next = hypenNumber.split("-").join("").length; // 현재화면 노출값

    if (useMaskingMode) {
      // 마스킹 모드면
      if (current < next) {
        // 번호 삭제가 아닌 추가면
        const lastChar = hypenNumber.slice(-1);
        setDisplayNum(displayNum + lastChar);
        let timeout = setTimeout(() => {
          masking(hypenNumber);
        }, 1000);
      } else {
        // 번호 삭제이면 대기없이 바로 마스킹처리
        masking(hypenNumber);
      }
    } else {
      //그대로 노출
      setDisplayNum(hypenNumber);
    }

    return () => {
      console.log("clear");
    };
  }, [hypenNumber]);

  useEffect(() => {
    if (useMaskingMode) {
      masking(hypenNumber);
    } else {
      setDisplayNum(hypenNumber);
    }
  }, [useMaskingMode]);

  return (
    <Conatiner>
      <DisplayContent>
        {/*
         * store 의 마스킹 모드 상태가 on일떄는 마스킹처리하여 보여주고
         * off 일때는 그냥 보여준다.
         */}
        {displayNum}
      </DisplayContent>
    </Conatiner>
  );
};

export default observer(DisplayNumber);
