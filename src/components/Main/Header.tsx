import React from "react";
import styled from "styled-components";
import MaskingButton from "components/Button/MaskingButton";

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 30px 28px;
`;
const GuideBox = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

const GuideText = styled.span`
  font-family: "SpoqaHanSans-Regular";
  font-size: 26px;
  color: #4d5256;
  letter-spacing: 0;
  text-align: center;
  line-height: 26px;
`;

const MaskingBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const MaskingText = styled.span`
  font-family: "SpoqaHanSans-Regular";
  font-size: 18px;
  color: #4d5256;
  letter-spacing: 0;
  line-height: 18px;
  padding-left: 12px;
`;

const Header = () => {
  return (
    <Container>
      <GuideBox>
        <GuideText>휴대전화번호를 눌러주세요.</GuideText>
      </GuideBox>
      <MaskingBox>
        <MaskingButton />
        <MaskingText>전화번호 마스킹</MaskingText>
      </MaskingBox>
    </Container>
  );
};

export default Header;
