import { check } from 'prettier';
import React, { useState } from 'react';
import styled from 'styled-components';

import { TAG_PLUS_ON_ICON, TAG_PLUS_OFF_ICON } from 'styles/CommonIcons';

const AddTagButton = () => {
  return (
    <StyleAddTag>
      <img src={TAG_PLUS_OFF_ICON} alt='플러스버튼 아이콘' />
      {' 키워드추가'}
    </StyleAddTag>
  );
};

export default AddTagButton;

const StyleAddTag = styled.button`
  display: flex;
  height: 30px;
  padding: 8px 12px;
  margin-right: 4px;
  text-align: center;
  border-radius: 18px;
  font-size: var(--fs-sm);
  color: var(--main-color);
  border: 1px solid var(--main-color);
  /* transition: all 0.3s; */

  &:hover,
  &:active {
    color: var(--bg-color);
    background-color: var(--main-color);
    img {
      content: url(${TAG_PLUS_ON_ICON});
    }
  }
  img {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }
`;
