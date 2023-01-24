import { check } from 'prettier';
import React, { useState } from 'react';
import styled from 'styled-components';

import { TAG_DELETE_ON_ICON, TAG_DELETE_OFF_ICON, TAG_PLUS_ON_ICON, TAG_PLUS_OFF_ICON } from 'styles/CommonIcons';
import AddTagButton from '../Buttons/Tag/AddTagButton';
import KeywordTagButton from '../Buttons/Tag/KeywordTagButton';

const TagComponent = () => {
  return (
    <StyleTagWrapper>
      <AddTagButton />
      <KeywordTagButton />
      <KeywordTagButton />
      <KeywordTagButton />
      <KeywordTagButton />
      <KeywordTagButton />
      <KeywordTagButton />
      <KeywordTagButton />
      <KeywordTagButton />
      <KeywordTagButton />
      <KeywordTagButton />
      <KeywordTagButton />
    </StyleTagWrapper>
  );
};

export default TagComponent;

const StyleTagWrapper = styled.article`
  display: flex;
  align-items: center;
  padding: 16px 16px 0px;
  height: 46px;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  white-space: nowrap;
`;
