import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import {
  EMBARRASSMENT_ON_EMOTION,
  EMBARRASSMENT_OFF_EMOTION,
  BAD_ON_EMOTION,
  BAD_OFF_EMOTION,
  SAD_ON_EMOTION,
  SAD_OFF_EMOTION,
  WEIRD_ON_EMOTION,
  WEIRD_OFF_EMOTION,
  GOOD_ON_EMOTION,
  GOOD_OFF_EMOTION,
  NOTBAD_ON_EMOTION,
  NOTBAD_OFF_EMOTION,
} from '../../../styles/CommonImages';

// 클릭가능여부(possibleClicked), 처음렌더될 이미지를 클릭된 이미지로 할지 선택(clickedImg), 텍스트여부(isText), 감정키워드(emotionTitle) 을 props 로 받아서 각 상황에 맞는 버튼을 렌더한다.

const EmotionButton = ({ possibleClicked = true, clickedImg = false, isText = false, emotionTitle = '좋아요' }) => {
  const [isClicked, setIsClicked] = useState(clickedImg);

  const onClickedButton = () => {
    if (possibleClicked) {
      setIsClicked(!isClicked);
    }
  };

  const emotionList = [
    { title: '당황스러워요', clickedImg: EMBARRASSMENT_ON_EMOTION, defaultImg: EMBARRASSMENT_OFF_EMOTION },
    { title: '별로에요', clickedImg: BAD_ON_EMOTION, defaultImg: BAD_OFF_EMOTION },
    { title: '속상해요', clickedImg: SAD_ON_EMOTION, defaultImg: SAD_OFF_EMOTION },
    { title: '이상해요', clickedImg: WEIRD_ON_EMOTION, defaultImg: WEIRD_OFF_EMOTION },
    { title: '좋아요', clickedImg: GOOD_ON_EMOTION, defaultImg: GOOD_OFF_EMOTION },
    { title: '평범해요', clickedImg: NOTBAD_ON_EMOTION, defaultImg: NOTBAD_OFF_EMOTION },
  ];

  const renderEmotion = emotionList.find(({ title }) => {
    return title === emotionTitle;
  });

  return (
    <>
      {renderEmotion && (
        <StyleButton onClick={onClickedButton}>
          <img
            src={isClicked === true ? renderEmotion.clickedImg : renderEmotion.defaultImg}
            alt={renderEmotion.title + '의 감정키워드 이미지'}
          />
          {isText ? <StyleText isClicked={isClicked}>{renderEmotion.title}</StyleText> : <></>}
        </StyleButton>
      )}
    </>
  );
};

export default EmotionButton;

const StyleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 72px;
  & img {
    width: 72px;
    height: 72px;
  }
`;

const StyleText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => (props.isClicked === true ? '#FBB829' : '#D0D0D0')};
  margin-top: 0.4rem;
`;
