import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import BasicIconButton from '../Buttons/BasicIconButton';

const TabPageAppBar = ({ btnList = [], tabPageName = 'BEPYEONG', isTapPage = true }) => {
  return (
    <>
      {isTapPage ? (
        <>
          <StyleAppBarWrapper>
            <StyleTapPageTitle>{tabPageName}</StyleTapPageTitle>
            <div>{btnList ? btnList.map((data) => <BasicIconButton key={data + '_btn'} title={data} />) : <></>}</div>
          </StyleAppBarWrapper>
        </>
      ) : (
        <>
          <StyleAppBarWrapper>
            <BasicIconButton title='뒤로가기' />
            <StyleSubPageTitle>{tabPageName}</StyleSubPageTitle>
            <div>{btnList ? btnList.map((data) => <BasicIconButton key={data + '_btn'} title={data} />) : <></>}</div>
          </StyleAppBarWrapper>
        </>
      )}
    </>
  );
};

export default TabPageAppBar;

const StyleAppBarWrapper = styled.header`
  max-width: 390px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0.8em 1.2em 0.8em 1.6em;
  z-index: 100;
  background-color: transparent;
`;

const StyleTapPageTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: left;
  letter-spacing: 0.08em;
  color: var(--main-color);
`;

const StyleSubPageTitle = styled(StyleTapPageTitle)`
  color: var(--text-color);
  font-size: 20px;
`;
