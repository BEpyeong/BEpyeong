import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NOTICE_REPORT, NOTICE_EVALUATE, NOTICE_ASSESSMENT_CLOSING } from '../../../styles/CommonIcons';
import BasicButton from '../Buttons/BasicButton';

const NoticeList = ({ children, title, img, isNoticePage = true }) => {
  // 평가했을 때, img --> NOTICE_EVALUATE
  // 마감됐을 때, img --> NOTICE_ASSESSMENT_CLOSING
  // 신고접수 떄, img --> NOTICE_REPORT

  const noticeIconList = [
    { id: 0, title: '평가', img: NOTICE_EVALUATE },
    { id: 1, title: '마감', img: NOTICE_ASSESSMENT_CLOSING },
    { id: 2, title: '신고', img: NOTICE_REPORT },
  ];

  return (
    <StyleNoticeListWrapper>
      {isNoticePage ? (
        <StyleNoticeListLi>
          <img src={NOTICE_REPORT} alt={title + ' 아이콘'} />
          <Link to=''>{children}</Link>
          <BasicButton size='XS'>삭제</BasicButton>
        </StyleNoticeListLi>
      ) : (
        <StyleNoticeListLi>
          <img src={NOTICE_EVALUATE} alt={title + ' 아이콘'} />
          <Link to=''>{children}</Link>
        </StyleNoticeListLi>
      )}
    </StyleNoticeListWrapper>
  );
};

export default NoticeList;

const StyleNoticeListWrapper = styled.ul`
  width: 100%;
  &:nth-child(2n) {
    background-color: var(--bg-color);
  }
  &:nth-child(2n-1) {
    background-color: var(--sub-color);
  }
`;

const StyleNoticeListLi = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 68px;
  padding: 22px;
  font-size: var(--fs-md);
  color: var(--main-color);

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
    margin: 0 0 0 auto;
  }
`;
