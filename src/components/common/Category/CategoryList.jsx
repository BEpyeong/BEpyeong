import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryList = ({ another = [], children }) => {
  // another = [] 안에 '광고 배너 관리' 와 같이 문자열 요소를 적어넣으면 리스트가 하나씩 생성됩니다.
  // 새로운 목록을 만들고 싶을 땐, import 한 곳에 <CategoryList anoth={['', '']}/> 를 추가로 작성해주세요.

  return (
    <>
      {
        <ListWrapper>
          {another.length ? (
            another.map((data, index) => (
              <ListItem key={index}>
                <Link to=''>{data}</Link>
              </ListItem>
            ))
          ) : (
            <></>
          )}
        </ListWrapper>
      }
    </>
  );
};

export default CategoryList;

export const ListWrapper = styled.ul`
  width: 358px;
  margin: 0 auto 16px;
  border-radius: 8px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const ListItem = styled.li`
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
