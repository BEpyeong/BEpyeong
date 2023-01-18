import React, { useState } from 'react';
import styled from 'styled-components';
import { Checkbox } from '@mui/material';
import { pink } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const PostCheckbox = ({ label, checked, handleChange }) => {
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
        return (
          <StyleCheckButton component='fieldset' checkList={checkList} key={checkList.id}>
            <FormGroup aria-label='position' row>
              <FormControlLabel
                value='top'
                control={
                  <Checkbox
                    {...label}
                    // defaultChecked
                    sx={{
                      color: pink[200],
                      '&.Mui-checked': {
                        color: pink[200],
                      },
                    }}
                    checked={checked}
                    onClick={() => {
                      const count = 0;
                      console.log(count % 2 === 0 ? '체크됨' : '체크해제됨');
                    }}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label={checkList.checkKeyword}
                labelPlacement='end'
              />
            </FormGroup>
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
  padding: 4px 0px 4px 14px;

  &:checked {
    /* border: 2px solid var(--main-color); */
    border: 2px solid red;
  }
`;
