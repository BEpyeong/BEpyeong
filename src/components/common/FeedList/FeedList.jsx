import React from 'react';
import styled from 'styled-components';
import { FEED_ICON_BEST, FEED_ICON_DATE, FEED_ICON_THUMB, FEED_ICON_VOTE_DATE } from 'styles/CommonIcons';
import FavoriteButton from '../Buttons/FavoriteButton';
import StarRateButton from '../Buttons/StarRateButton';

const FeedList = ({
  isFavorite,
  thumbnail,
  mainText,
  likeCounts,
  bestEmotionKey,
  starRate,
  user,
  postTime,
  votingPeriod,
}) => {
  return (
    <StyleWrapper>
      <StyleFavoriteIcon>
        <FavoriteButton />
      </StyleFavoriteIcon>
      <StyleMainText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi fugiat, veritatis quaerat ipsum eos, saepe
        autem ea error cum, vero ullam odit. Velit deleniti, cupiditate dicta reiciendis quae explicabo accusamus.
      </StyleMainText>
      <StyleContent>
        <StyleContentLine>
          <StyleSubText>
            <img src={FEED_ICON_THUMB} alt='추천수 아이콘' />
            <p>{'00'}</p>
          </StyleSubText>
          <StyleSubText>
            <img src={FEED_ICON_BEST} alt='최다득표를 뜻하는 왕관' />
            <p>{'우울해요'}</p>
          </StyleSubText>
          <StarRateButton isReadOnly={true} defaultStar={2.5} />
        </StyleContentLine>
        <StyleContentLine>
          <StyleSubText>
            <p>{'by'}</p>
            <p>{'닉네임최대8글자'}</p>
          </StyleSubText>
          <StyleSubText>
            <img src={FEED_ICON_DATE} alt='게시시간 아이콘' />
            <p>{'00시간 전'}</p>
          </StyleSubText>
        </StyleContentLine>
        <StyleContentLine>
          <StyleSubText>
            <img src={FEED_ICON_VOTE_DATE} alt='투표기간 아이콘' />
            <p>{'22.07.13 14:00'}</p>
          </StyleSubText>
        </StyleContentLine>
      </StyleContent>
    </StyleWrapper>
  );
};

export default FeedList;

const StyleFavoriteIcon = styled.span`
  position: absolute;
  left: 322px;
  top: 16px;
`;

const StyleWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 358px;
  height: 180px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  background-image: ${(props) => props.thumbnail};
  border-radius: 8px;
`;

const StyleMainText = styled.h2`
  width: 196px;
  height: 32px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 16px;
`;

const StyleContent = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  text-align: center;
  letter-spacing: 0.08em;

  color: #d0d0d0;
`;

const StyleContentLine = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 0px;
  gap: 16px;
  & + & {
    margin-top: 8px;
  }
`;

const StyleSubText = styled.span`
  display: flex;
  align-items: center;
  height: 14px;
  img {
    width: 14px;
    height: 14px;
  }
  p {
    margin-left: 4px;
    height: 14px;
  }
`;
