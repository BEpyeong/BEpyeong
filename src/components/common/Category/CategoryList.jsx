import React from 'react';
import styled from 'styled-components';

const CategoryList = ({ another }) => {
  another = [];

  // 언젠가 추가될 another의 글 리스트 갯수가 1개 이상이라도 생기면
  // 해당 목록의 마지막 라인에 리스트 추가해 주고, 추가할게 없으면 그냥 두기

  return (
    <>
      <ListWrapper>
        <ListItem>작성한 글 목록</ListItem>
        <ListItem>평가한 글 목록</ListItem>
        {another.length >= 1 ? another.map((data, index) => <ListItem>{data}</ListItem>) : ''}
      </ListWrapper>

      <ListWrapper>
        <ListItem>개인정보 변경</ListItem>
        {another.length >= 1 ? another.map((data, index) => <ListItem>{data}</ListItem>) : ''}
      </ListWrapper>

      <ListWrapper>
        <ListItem>이용문의</ListItem>
        <ListItem>이용정보</ListItem>
        {another.length >= 1 ? another.map((data, index) => <ListItem>{data}</ListItem>) : ''}
      </ListWrapper>
    </>
  );
};

export default CategoryList;

const ListWrapper = styled.ul`
  width: 358px;
  margin: 0 auto 16px;
  border-radius: 8px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 86px;
  padding: 16px 24px;
  box-sizing: border-box;
  font-size: var(--fs-xl);
  color: var(--text-color);
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }
`;
