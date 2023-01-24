import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const BasicButton = ({
  children,
  size,
  disabled,
  backgroundColor = 'var(--main-color)', // 취소 기본 배경: #D1D1D1
  activeBgColor = 'var(--point-color)', // 취소 액티브 배경: #E9E9E9
  textColor = 'var(--bg-color)',
  type,
  onClickHandler,
  isActive = true,
  className,
}) => {
  return (
    <StyledButton
      size={size}
      disabled={disabled}
      backgroundColor={backgroundColor}
      activeBgColor={activeBgColor}
      textColor={textColor}
      type={type}
      onClick={onClickHandler}
      isActive={isActive}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default BasicButton;

export const ButtonSize = css`
  ${({ size }) => {
    switch (size) {
      case 'L':
        return css`
          width: 350px;
          height: 56px;
          border-radius: 16px;

          &:active:not(:disabled) {
            background: ${(props) => props.activeBgColor};
          }
        `;

      case 'M':
        return css`
          width: 322px;
          height: 48px;
          border-radius: 16px;

          &:active:not(:disabled) {
            background: ${(props) => props.activeBgColor};
          }
        `;

      case 'S':
        return css`
          width: 140px;
          height: 54px;
          border-radius: 16px;

          &:active:not(:disabled) {
            background: ${(props) => props.activeBgColor};
          }
        `;

      case 'XS':
        return css`
          width: 40px;
          height: 36px;
          border-radius: 6px;

          &:active:not(:disabled) {
            background: ${(props) => props.activeBgColor};
          }
        `;

      default:
        return;
    }
  }}
`;

// 버튼의 기본 스타일
export const StyledButton = styled.button`
  ${ButtonSize}
  margin: 0 auto;
  outline: none;
  box-sizing: border-box;
  font-size: var(--fs-lg);
  color: ${(props) => props.textColor};
  background: ${(props) => (props.disabled ? 'var(--sub-color)' : props.backgroundColor)};
`;
