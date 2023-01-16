import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const BasicButton = ({
  children,
  size,
  disabled,
  backgroundColor = 'var(--main-color)',
  textColor = 'var(--bg-color)',
  type,
  onClickHandler,
  isActive = true,
}) => {
  return (
    <StyledButton
      size={size}
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      type={type}
      onClick={onClickHandler}
      isActive={isActive}
    >
      {children}
    </StyledButton>
  );
};

export default BasicButton;

const ButtonSize = css`
  ${({ size }) => {
    switch (size) {
      case 'L':
        return css`
          width: 350px;
          height: 56px;
          border-radius: 16px;

          & {
            background: ${(props) => (props.disabled === true ? 'var(--sub-color)' : 'var(--main-color)')};
          }

          &:active:not(:disabled) {
            background: var(--point-color);
          }
        `;

      case 'M':
        return css`
          width: 322px;
          height: 48px;
          border-radius: 16px;

          & {
            background: ${(props) => (props.disabled === true ? 'var(--sub-color)' : 'var(--main-color)')};
          }

          &:active:not(:disabled) {
            background: var(--point-color);
          }
        `;

      case 'S':
        return css`
          width: 140px;
          height: 54px;
          border-radius: 16px;

          & {
            background: ${(props) => (props.children === '등록하기' ? 'var(--main-color)' : '#E9E9E9')};
          }

          &:active {
            background: ${(props) => (props.children === '등록하기' ? 'var(--point-color)' : '#D1D1D1')};
          }
        `;

      case 'XS':
        return css`
          width: 40px;
          height: 36px;
          border-radius: 6px;

          & {
            background: ${(props) => (props.disabled === true ? 'var(--sub-color)' : 'var(--main-color)')};
          }

          &:active:not(:disabled) {
            background: var(--point-color);
          }
        `;

      default:
        return;
    }
  }}
`;

// 버튼의 기본 스타일
const StyledButton = styled.button`
  ${ButtonSize}
  margin: 0 auto;
  outline: none;
  box-sizing: border-box;
  font-size: var(--fs-lg);
  color: ${(props) => props.textColor};
  background: ${(props) => props.backgroundColor};
`;
