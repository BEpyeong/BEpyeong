import { check } from 'prettier';
import React, { useState } from 'react';
import styled from 'styled-components';

import AddTagButton from '../Buttons/Tag/AddTagButton';
import KeywordTagButton from '../Buttons/Tag/KeywordTagButton';

const TagComponent = () => {
  return (
    <StyleTagWrapper>
      <AddTagButton />
      <KeywordTagButton disabled={true}>{'전체'}</KeywordTagButton>
    </StyleTagWrapper>
  );
};

export default TagComponent;

const StyleTagWrapper = styled.article`
  display: flex;
  align-items: center;
  position: fixed;
  padding: 16px 16px;
  height: 62px;
  width: 390px;
  background-color: var(--main-bg-color);
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  white-space: nowrap;
  z-index: 100;
`;
