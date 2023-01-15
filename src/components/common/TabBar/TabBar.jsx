import React from 'react';
import styled from 'styled-components';

import {
  HOME_ON_ICON,
  HOME_OFF_ICON,
  FAVORITES_ON_ICON,
  FAVORITES_OFF_ICON,
  MYPAGE_ON_ICON,
  MYPAGE_OFF_ICON,
} from '../../../styles/CommonIcons';

const TabBar = ({ tabPage = 'Tab_Home' }) => {
  const tabList = [
    {
      id: 'Tab_Home',
      tabName: '홈',
      selectedIcon: HOME_ON_ICON,
      defaultIcon: HOME_OFF_ICON,
    },
    {
      id: 'Tab_Favorites',
      tabName: '관심목록',
      selectedIcon: FAVORITES_ON_ICON,
      defaultIcon: FAVORITES_OFF_ICON,
    },
    {
      id: 'Tab_Mypage',
      tabName: '마이페이지',
      selectedIcon: MYPAGE_ON_ICON,
      defaultIcon: MYPAGE_OFF_ICON,
    },
  ];

  return (
    <StyleTabBar>
      {tabList.map(({ id, tabName, selectedIcon, defaultIcon }) => (
        <StyleTabButton key={id}>
          <img src={id === tabPage ? selectedIcon : defaultIcon} alt={tabName + ' 페이지'} />
          <StyleTabName>{tabName}</StyleTabName>
        </StyleTabButton>
      ))}
    </StyleTabBar>
  );
};

export default TabBar;

const StyleTabBar = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--sub-color);
  z-index: 1;
  height: 92px;
  width: 390px;
  border-radius: 0.8rem 0.8rem 0rem 0rem;
`;

const StyleTabButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);

  & img {
    width: 24px;
    height: 24px;
  }
`;

const StyleTabName = styled.span`
  margin-top: 0.4em;
  font-size: 1.2em;
  font-weight: 500;
  color: var(--point-color);
`;
