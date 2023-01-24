import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SEARCH_ICON } from 'styles/CommonIcons';
import RecentSearch from './RecentSearch/RecentSearch';
import SearchedFeedList from './SearchedFeedList/SearchedFeedList';

const SearchPage = () => {
  return (
    <>
      <StyleSearchAppBar>
        <StyleInputWrapper onSubmit>
          <StyleSearchInput type='text' name='text' onChange placeholder='검색어를 입력해 주세요.' />
          <StyleSearchButton type='submit'>
            <img src={SEARCH_ICON} alt='검색하기 버튼' />
          </StyleSearchButton>
        </StyleInputWrapper>
        <StyleBackButton>취소</StyleBackButton>
      </StyleSearchAppBar>
      <StyleWrapper>
        <h1 className='sr-only'>검색페이지</h1>
        <RecentSearch />
        {/* <h1 className='sr-only'>검색된 피드 리스트 목록</h1>
        <SearchedFeedList /> */}
      </StyleWrapper>
    </>
  );
};

export default SearchPage;

const StyleSearchAppBar = styled.header`
  max-width: 390px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  padding: 1em 1.6em 0.8em 1.6em;
  z-index: 100;
  background-color: var(--main-bg-color);
`;

const StyleInputWrapper = styled.form`
  width: 304px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background: var(--sub-color);
  border-radius: 4px;
  padding: 8px 8px 8px 16px;
`;

const StyleSearchInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  width: 240px;
  height: 24px;
  &::placeholder {
    color: var(--sub-text-color);
  }
`;

const StyleSearchButton = styled.button`
  width: 24px;
  height: 24px;
`;

const StyleBackButton = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: var(--main-color);
  width: 48px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyleWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 58px;
`;
