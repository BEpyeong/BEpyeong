import React from 'react';
import styled from 'styled-components';

const BasicToastPopup = () => {
  return (
    <StyleWrapper>
      <h2 className='sr-only'>토스트팝업</h2>
      <StyleToastPopup>
        <MenuItem>
          <button type='button'>설정 및 개인정보</button>
        </MenuItem>
        <MenuItem>
          <button type='button'>로그아웃</button>
        </MenuItem>
      </StyleToastPopup>
    </StyleWrapper>
  );
};

export default BasicToastPopup;

const StyleWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9800;
`;

const StyleToastPopup = styled.article`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 39rem;
  padding: 1.6rem 0 1rem 0;
  border-radius: 10px 10px 0 0;
  background-color: var(--main-bg-color);

  ::before {
    content: '';
    display: block;
    width: 13.4rem;
    height: 4px;
    margin: 0 auto 2.4rem auto;
    background-color: var(--border-color);
  }
`;

const MenuItem = styled.li`
  padding-left: 2.6rem;

  & > * {
    display: block;
    width: 100%;
    padding: 1.4rem 0;
    text-align: left;
    font-size: var(--fs-md);
  }
`;
