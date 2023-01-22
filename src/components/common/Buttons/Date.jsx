import React from 'react';
import styled from 'styled-components';
import { CALENDAR_ICON } from 'styles/CommonIcons';

const Date = () => {
  return (
    // YY.MM.DD HH:MM
    <DateLabel htmlFor='dateTime'>
      <DateInput id='dateTime' type='datetime-local' data-placeholder='00.00.00 00:00' required />
    </DateLabel>
  );
};

export default Date;

const DateLabel = styled.label`
  width: 138px;
  height: 38px;
  border: 1.6px solid var(--main-color);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: var(--sub-color);
  cursor: pointer;
`;

const DateInput = styled.input`
  display: block;
  width: 138px;
  height: 38px;
  flex-direction: row-reverse;
  font-size: var(--fs-sm);

  &[type='datetime-local'] {
    position: relative;
    padding-left: 12px;
    background: url(${CALENDAR_ICON}) no-repeat 0px center;
    background-size: 12px 14px;
    text-indent: 8px;
  }

  &[type='datetime-local']::-webkit-clear-button,
  &[type='datetime-local']::-webkit-inner-spin-button {
    display: none;
  }

  &[type='datetime-local']::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 12px;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    color: transparent;
    cursor: pointer;
  }

  &[type='datetime-local']::before {
    content: attr(data-placeholder);
    width: 100%;
  }

  &[type='datetime-local']:valid::before {
    display: none;
  }

  &[data-placeholder]::before {
    color: var(--main-color);
  }
`;
