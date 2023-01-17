import React from 'react';
import { HEART_ON_ICON, HEART_OFF_ICON } from '../../../styles/CommonIcons';
import { useState } from 'react';
import styled from 'styled-components';

const FavoriteButton = () => {
  const [favoriteButton, setFavoriteButton] = useState(false);
  return (
    <StyleButton onClick={() => setFavoriteButton(!favoriteButton)}>
      <img src={favoriteButton ? HEART_ON_ICON : HEART_OFF_ICON} alt='관심목록 추가 아이콘' />
    </StyleButton>
  );
};

export default FavoriteButton;

const StyleButton = styled.button`
  width: 20px;
  height: 18px;
`;
