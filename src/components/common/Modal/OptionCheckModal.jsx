import React from 'react';
import styled from 'styled-components';
import BasicButton from '../Buttons/BasicButton';

const OptionCheckModal = () => {
  return (
    <>
      <BlurBg>
        <ModalLayoutStyle>
          <ModalText>
            평가 옵션을 1개 이상
            <br />
            선택하여 주세요.
          </ModalText>
          <ModalOkBtn size='XS' backgroundColor activeBgColor='' textColor='var(--main-color)'>
            확인
          </ModalOkBtn>
        </ModalLayoutStyle>
      </BlurBg>
    </>
  );
};

export default OptionCheckModal;

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
  /* height: 144px; */
  padding: 24px;
  border-radius: 16px;
  background-color: var(--bg-color);
  z-index: 999;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  flex-direction: column;
`;

const ModalText = styled.strong`
  font-size: var(--fs-xl);
  font-weight: bold;
  color: var(--text-color);
  line-height: 24px;
`;

const ModalOkBtn = styled(BasicButton)`
  margin: 0 0 0 auto;
  font-size: var(--fs-xl);
  font-weight: bold;

  &:hover,
  &:active {
    color: var(--alert-color);
  }
`;
