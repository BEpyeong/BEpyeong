import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NOTICE_REPORT, NOTICE_EVALUATE, NOTICE_ASSESSMENT_CLOSING } from '../../../styles/CommonIcons';

const Notice = () => {
  return (
    <StyleNoticeListWrapper>
      <StyleNoticeListLi>
        <img src={NOTICE_EVALUATE} alt='' />
        <Link to=''>
          <p>작성한 글 에 새로운 평가가 등록되었어요.</p>
        </Link>
      </StyleNoticeListLi>
      <StyleNoticeListLi>
        <img src={NOTICE_ASSESSMENT_CLOSING} alt='' />
        <Link to=''>
          <p>평가한 글 이 마감 되었어요.</p>
        </Link>
      </StyleNoticeListLi>
      <StyleNoticeListLi>
        <img src={NOTICE_ASSESSMENT_CLOSING} alt='' />
        <Link to=''>
          <p>평가한 글 이 마감 되었어요.</p>
        </Link>
      </StyleNoticeListLi>
      <StyleNoticeListLi>
        <img src={NOTICE_EVALUATE} alt='' />
        <Link to=''>
          <p>작성한 글 에 새로운 평가가 등록되었는데요 근데요</p>
        </Link>
      </StyleNoticeListLi>
    </StyleNoticeListWrapper>
  );
};

export default Notice;

const StyleNoticeListWrapper = styled.ul`
  width: 100%;
`;

const StyleNoticeListLi = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 68px;
  padding: 22px;
  font-size: var(--fs-md);
  color: var(--main-color);

  &:nth-child(2n) {
    background-color: var(--bg-color);
  }
  &:nth-child(2n-1) {
    background-color: var(--sub-color);
  }

  > img {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }

  a {
    display: flex;
    height: 68px;
    align-items: center;
  }

  p {
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button {
    margin-left: auto;
  }
`;
