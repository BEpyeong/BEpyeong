import React from 'react';
import styled from 'styled-components';

import { SEARCHED_LIST_SEARCH_ICON, SEARCHED_LIST_DELETE_ICON } from 'styles/CommonIcons';

const RecentSearch = () => {
  return (
    <StyleWrapper>
      <StyleTableTitleWrapper>
        <StyleTableTitle>최근 검색어</StyleTableTitle>
        <StyleDeleteButton type='button'>전체삭제</StyleDeleteButton>
      </StyleTableTitleWrapper>
      <ul>
        <StyleSearchList key={''}>
          <img src={SEARCHED_LIST_SEARCH_ICON} alt='검색리스트를 표현하는 대표 아이콘' />
          <StyleSearchKeyword>{'패션'}</StyleSearchKeyword>
          <StyleDate>{'01.01'}</StyleDate>
          <StyleListDeleteButton>
            <img src={SEARCHED_LIST_DELETE_ICON} alt='검색리스트 삭제 버튼 아이콘' />
          </StyleListDeleteButton>
        </StyleSearchList>
      </ul>
    </StyleWrapper>
  );
};

export default RecentSearch;

const StyleWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--sub-text-color);
  ul {
    margin-top: 52px;
  }
`;

const StyleTableTitleWrapper = styled.div`
  position: fixed;
  width: 390px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px 16px 12px 16px;
  width: 390px;
  height: 52px;
  background-color: var(--main-bg-color);
`;

const StyleTableTitle = styled.h2``;

const StyleDeleteButton = styled.button``;

const StyleSearchList = styled.li`
  display: flex;
  align-items: center;
  width: 390px;
  height: 56px;
  padding: 8px 16px;
  background-color: var(--sub-color);
  img {
    width: 40px;
    height: 40px;
  }
`;

const StyleSearchKeyword = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  margin-left: 12px;
  margin-right: 12px;
  color: var(--point-color);
  width: 238px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const StyleDate = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-right: 4px;
`;

const StyleListDeleteButton = styled.button`
  img {
    width: 18px;
    height: 18px;
  }
`;
