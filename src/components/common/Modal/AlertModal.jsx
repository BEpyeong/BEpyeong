import React from 'react';
import styled from 'styled-components';
import BasicButton from '../Buttons/BasicButton';

const AlertModal = ({ children, isUpload }) => {
  return (
    <>
      <BlurBg>
        {isUpload ? (
          <ModalLayoutStyle>
            <ModalText>글을 올리시겠습니까?</ModalText>
            <ButtonWrapper>
              <BasicButton size='S' backgroundColor='#E9E9E9' activeBgColor='#dfdfdf' textColor='var(--sub-text-color)'>
                취소
              </BasicButton>
              <BasicButton size='S'>등록하기</BasicButton>
            </ButtonWrapper>
          </ModalLayoutStyle>
        ) : (
          <ModalLayoutStyle>
            <ModalText>전체 확인 하시겠습니까?</ModalText>
            <ButtonWrapper>
              <BasicButton size='S' backgroundColor='#E9E9E9' activeBgColor='#dfdfdf' textColor='var(--sub-text-color)'>
                취소
              </BasicButton>
              <BasicButton size='S'>전체확인</BasicButton>
            </ButtonWrapper>
          </ModalLayoutStyle>
        )}
      </BlurBg>
    </>
  );
};

export default AlertModal;

const BlurBg = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
  height: 100vh;
  background-color: #00000030;
  z-index: 888;
`;

const ModalLayoutStyle = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -100%);
  width: 320px;
  /* height: 200px; */
  padding: 24px 16px;
  border-radius: 16px;
  background-color: var(--bg-color);
  text-align: center;
  z-index: 999;
`;

const ModalText = styled.strong`
  font-size: var(--fs-xl);
  font-weight: bold;
  color: var(--text-color);
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`;
