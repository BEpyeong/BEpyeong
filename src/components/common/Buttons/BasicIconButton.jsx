import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { SEARCH_ICON, BACK_ICON, ALARM_ICON, CHECK_ICON, HAMBURGER_ICON } from 'styles/CommonIcons.jsx';

const BasicIconButton = ({ title }) => {
  const navigate = useNavigate();

  const iconImgList = [
    { iconTitle: '검색', img: SEARCH_ICON },
    { iconTitle: '알림', img: ALARM_ICON },
    { iconTitle: '뒤로가기', img: BACK_ICON },
    { iconTitle: '햄버거', img: HAMBURGER_ICON },
    { iconTitle: '체크', img: CHECK_ICON },
  ];

  const iconDataObj = iconImgList.find(({ iconTitle }) => {
    return iconTitle === title;
  });

  const moveSelectPage = (title) => {
    switch (title) {
      case '검색':
        navigate('/');
        break;

      case '알림':
        navigate('/');
        break;

      case '뒤로가기':
        navigate('/');
        break;

      case '햄버거':
        navigate('/');
        break;

      case '체크':
        navigate('/');
        break;

      default:
    }
  };

  return (
    <>
      {iconDataObj && (
        <StyleIconBtn onClick={() => moveSelectPage(title)}>
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
  & + & {
    margin-left: 10px;
  }
`;
