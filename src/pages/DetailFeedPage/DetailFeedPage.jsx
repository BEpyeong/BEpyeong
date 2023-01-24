import TabPageAppBar from 'components/common/AppBar/TabPageAppBar';
import TabBar from 'components/common/TabBar/TabBar';
import ContentsLayout from 'components/layout/ContentsLayout/ContentsLayout';
import React from 'react';
import styled from 'styled-components';
import { PROFILE_DEFAULT, LOGO } from 'styles/CommonImages';
import { LIKE_OFF_ICON, LIKE_ON_ICON } from 'styles/CommonIcons';
import { useState } from 'react';
import EmotionKeywordCard from 'components/EmotionKeywordCard/EmotionKeywordCard';
import BasicButton from 'components/common/Buttons/BasicButton';

const DetailFeedPage = () => {
  const [isLikeButton, setIsLikeButton] = useState(false);
  return (
    <>
      <TabPageAppBar btnList={['햄버거']} isTapPage={false} tabPageName='' />
      <ContentsLayout padding='0'>
        <StyleProfileWrapper>
          <img src={PROFILE_DEFAULT} alt='게시글 작성자 프로필 이미지' />
          <p>{'사용자닉네임'}</p>
        </StyleProfileWrapper>
        <StyleFeedContents>
          <StyleFeedImage src={LOGO} />
          <StyleLikeScore>
            <button onClick={() => setIsLikeButton(!isLikeButton)}>
              <img src={isLikeButton ? LIKE_ON_ICON : LIKE_OFF_ICON} alt='' />
            </button>
            <span>
              추천
              <p>{'00'}</p>개
            </span>
          </StyleLikeScore>
          <StyleContentText>
            <p>{'컨텐츠내용입니다. 가나다라마사아자차카타파하가나다라마바사아자차카아가나다라마바사아자차카타파하'}</p>
            <StyleKeywordText>
              {'#'}
              {'키워드'}
            </StyleKeywordText>
          </StyleContentText>
          <EmotionKeywordCard />
          <BasicButton size='L'>{'평가하기'}</BasicButton>
        </StyleFeedContents>
      </ContentsLayout>
      <TabBar />
    </>
  );
};

export default DetailFeedPage;

const StyleProfileWrapper = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    margin-left: 16px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #222222;
    margin-left: 8px;
  }
`;

const StyleFeedContents = styled.article`
  display: flex;
  flex-direction: column;
  color: #222222;
  div + section {
    margin: 16px auto 0;
  }
  margin-bottom: 34px;
  button {
    :last-child {
      margin-top: 16px;
    }
  }
`;

const StyleFeedImage = styled.img`
  width: 390px;
  height: 390px;
  background-color: #ffffff;
  object-fit: contain;
`;

const StyleLikeScore = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 16px;
  height: 46px;
  button {
    img {
      width: 20px;
      height: 20px;
    }
  }
  span {
    display: flex;
    align-items: center;
    margin-left: 6px;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    p {
      margin-left: 2px;
    }
  }
`;

const StyleContentText = styled.div`
  padding: 0 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

const StyleKeywordText = styled.p`
  height: 16px;
  color: #9e9e9e;
  margin-top: 8px;
  margin-right: 2px;
`;
