import React, { useState } from 'react';
import styled from 'styled-components';
import { CHECK_KEYWORD_OFF, CHECK_KEYWORD_ON } from 'styles/CommonIcons';

const PostCheckbox = () => {
  // const [isChecked, setIsChecked] = useState(false);

  const [checkKeywordList, setCheckKeywordList] = useState([
    {
      id: 1,
      checkKeyword: '익명',
      checked: true,
    },
    {
      id: 2,
      checkKeyword: '추천',
      checked: true,
    },
    {
      id: 3,
      checkKeyword: '감정키워드',
      checked: true,
    },
    {
      id: 4,
      checkKeyword: '별점',
      checked: true,
    },
  ]);

  return (
    <StyleCheckKeywordWrapper>
      {checkKeywordList.map((checkList, index) => {
        console.log('test');

        return (
          <StyleCheckButton checkList={checkList} key={checkList.id}>
            <img src={CHECK_KEYWORD_ON} alt='' />
            <StyleKeyword>{checkList.checkKeyword}</StyleKeyword>
          </StyleCheckButton>
        );
      })}
    </StyleCheckKeywordWrapper>
  );
};

export default PostCheckbox;

const StyleCheckKeywordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyleCheckButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 2px solid transparent;
  background-color: var(--sub-color);
  color: var(--main-color);
  padding: 12px;

  img {
    width: 14px;
    height: 14px;
  }

  &:checked {
    border: 2px solid var(--main-color);
  }
`;

const StyleKeyword = styled.span`
  margin-left: 8px;
`;
