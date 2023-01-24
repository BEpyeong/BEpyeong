import { check } from 'prettier';
import React, { useState } from 'react';
import styled from 'styled-components';

import { TAG_DELETE_ON_ICON, TAG_DELETE_OFF_ICON } from 'styles/CommonIcons';

const KeywordTagButton = () => {
  const [isOnButton, setIsOnButton] = useState(false);
  return (
    <StyleTag isOnButton={isOnButton} onClick={() => setIsOnButton(!isOnButton)}>
      <input type='checkbox' id='keyword' className='sr-only' />
      <label htmlFor='keyword' className='sr-only' />
      {'감정'}
      <button>
        <img src={isOnButton ? TAG_DELETE_ON_ICON : TAG_DELETE_OFF_ICON} alt='삭제버튼 아이콘' />
      </button>
    </StyleTag>
  );
};

export default KeywordTagButton;

const StyleTag = styled.button`
  display: flex;
  /* width: 200px; */
  height: 30px;
  padding: 8px 12px;
  margin-right: 4px;
  text-align: center;
  border-radius: 18px;
  font-size: var(--fs-sm);
  color: ${(props) => (props.isOnButton ? 'var(--main-bg-color)' : 'var(--main-color)')};
  background-color: ${(props) => (props.isOnButton ? 'var(--main-color)' : 'var(--main-bg-color)')};
  border: 1px solid var(--main-color);
  /* transition: all 0.3s; */

  &:hover,
  &:active {
    color: var(--bg-color);
    background-color: var(--main-color);
    img {
      content: url(${TAG_DELETE_ON_ICON});
    }
  }

  &::before {
    content: '#';
  }
  img {
    width: 14px;
    height: 14px;
  }
  button {
    margin-left: 4px;
  }
`;
