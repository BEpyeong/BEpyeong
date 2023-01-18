import React from 'react';
import styled from 'styled-components';

import { SEARCH_ICON, BACK_ICON, ALARM_ICON, CHECK_ICON, HAMBURGER_ICON } from 'styles/CommonIcons.jsx';

const BasicIconButton = ({ onClickPageHandler, title }) => {
  const iconImgList = [
    { iconTitle: '검색', img: SEARCH_ICON },
    { iconTitle: '알림', img: BACK_ICON },
    { iconTitle: '뒤로가기', img: ALARM_ICON },
    { iconTitle: '햄버거', img: CHECK_ICON },
    { iconTitle: '체크', img: HAMBURGER_ICON },
  ];

  const iconDataObj = iconImgList.find(({ iconTitle }) => {
    return iconTitle === title;
  });

  return (
    <>
      {iconDataObj && (
        <StyleIconBtn onClick={onClickPageHandler}>
          <img src={iconDataObj.img} alt={iconDataObj.iconTitle + ' 아이콘'} />
        </StyleIconBtn>
      )}
    </>
  );
};

export default BasicIconButton;

const StyleIconBtn = styled.button`
  width: 24px;
  height: 24px;
`;
