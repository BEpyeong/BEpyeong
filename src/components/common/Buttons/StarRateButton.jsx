import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import { useState } from 'react';

const StarRateButton = ({ defaultStar, isReadOnly = false }) => {
  // 읽는 기능만 존재할 경우 name='half-rating-read' 하고 readOnly props 추가
  const [value, setValue] = useState(0);

  return (
    <>
      {isReadOnly ? (
        <StyleStack spacing={0}>
          <StyleOnlyReadRating name='half-rating' defaultValue={0.5} precision={0.5} value={defaultStar} readOnly />
        </StyleStack>
      ) : (
        <StyleStack spacing={1}>
          <StyleRating
            name='half-rating'
            defaultValue={0.5}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            value={value}
          />
        </StyleStack>
      )}
    </>
  );
};

export default StarRateButton;

const StyleStack = styled(Stack)`
  align-items: center;
`;

const StyleRating = styled(Rating)`
  .MuiRating-iconFilled {
    color: #f7d500;
  }
  .MuiRating-iconEmpty {
    color: #d9d9d9;
  }
  svg {
    width: 44px;
    height: 44px;
  }
`;

const StyleOnlyReadRating = styled(StyleRating)`
  svg {
    width: 14px;
    height: 14px;
  }
`;
