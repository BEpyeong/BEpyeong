import React from 'react';
import styled from 'styled-components';
import ContentsLayout from 'components/layout/ContentsLayout/ContentsLayout';
import { NOTFOUNDPAGE404 } from 'styles/CommonImages';
import BasicButton from 'components/common/Buttons/BasicButton';

const NotFoundPage = () => {
  return (
    <ContentsLayout>
      <StyleWrapper>
        <Img src={NOTFOUNDPAGE404} alt='페이지를 찾을 수 없어요.' />
        <AlertText>페이지를 찾을 수 없어요.</AlertText>
        <BasicButton size='M'>뒤로가기</BasicButton>
      </StyleWrapper>
    </ContentsLayout>
  );
};

export default NotFoundPage;

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
`;

const Img = styled.img`
  width: 140px;
  height: auto;
  margin-bottom: 20px;
`;

const AlertText = styled.p`
  color: #767676;
  font-size: var(--fs-md);
  margin-bottom: 30px;
`;
