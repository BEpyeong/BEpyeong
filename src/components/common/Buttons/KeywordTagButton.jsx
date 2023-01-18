import { check } from 'prettier';
import React from 'react';
import styled from 'styled-components';

const KeywordTagButton = () => {
  return (
    <StyleTagWrapper>
      <StyleTag>
        <input type='checkbox' id='keyword' className='sr-only' />
        <label htmlFor='keyword'>패션</label>
      </StyleTag>
      <StyleTag>
        <input type='checkbox' id='keyword' className='sr-only' />
        <label htmlFor='keyword'>감정</label>
      </StyleTag>
      <StyleTag />
    </StyleTagWrapper>
  );
};

export default KeywordTagButton;

const StyleTagWrapper = styled.article``;

// 홀수 번 체크 시, 색상 채워지고
// 짝수 번 체크 시, 색상 해제
const StyleTag = styled.button`
  height: 30px;
  padding: 8px 12px;
  margin-right: 4px;
  text-align: center;
  border-radius: 18px;
  font-size: var(--fs-sm);
  color: var(--main-color);
  border: 1px solid var(--main-color);
  transition: all 0.3s;

  &:hover,
  &:active {
    color: var(--bg-color);
    background-color: var(--main-color);
  }

  &::before {
    content: '#';
  }

  &:last-child {
    &::before {
      content: '+ 키워드추가';
    }
    margin-right: 0;
  }
`;
