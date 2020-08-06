import React from "react";
import useStores from "../../hooks/useStores";
import styled from "styled-components";

const Container = styled.div`
  dislay: flex;
  flex: 1;
  justify-content: center;
  aling-items: center;
  flex-direction: column;
  text-align: center;
`;

const PointText = styled.span`
  font-family: SpoqaHanSans-Bold;
  font-size: 80px;
  color: #4c80f1;
  letter-spacing: 0;
  text-align: center;
  line-height: 90px;
`;

const CompleteText = styled.span`
  font-family: SpoqaHanSans-Regular;
  font-size: 48px;
  color: #4d5256;
  letter-spacing: 0;
  text-align: center;
  line-height: 56px;
`;

const Box = styled.div``;
const PointBox = styled.div`
  padding-bottom: 14px;
`;

const Divider = styled.div`
  border: 1px solid #ced3d6;
  margin: 47px 162px 35px;
`;
const PointGuideText = styled.span`
  font-family: SpoqaHanSans-Regular;
  font-size: 28px;
  color: #a9afb3;
  letter-spacing: 0;
  text-align: center;
  line-height: 28px;
`;

const DisplayPoint = () => {
  const {
    numpadStore: { point },
  } = useStores();

  return (
    <Container>
      <PointBox>
        <PointText>1 P</PointText>
      </PointBox>
      <Box>
        <CompleteText>적립 완료</CompleteText>
      </Box>
      <Divider />
      <Box>
        <PointGuideText>보유 포인트는 {point} P 입니다.</PointGuideText>
      </Box>
    </Container>
  );
};

export default DisplayPoint;
