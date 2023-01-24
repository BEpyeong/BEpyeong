import BasicButton from 'components/common/Buttons/BasicButton';
import EmotionButton from 'components/common/Buttons/EmotionButton';
import StarRateButton from 'components/common/Buttons/StarRateButton';
import React from 'react';
import styled from 'styled-components';

const RatingToastPopup = () => {
  return (
    <StyleWrapper>
      <h2 className='sr-only'>토스트팝업</h2>
      <StyleToastPopup>
        <RatingTitle>별점</RatingTitle>
        <StarRateButton />
        <RatingTitle>감정키워드</RatingTitle>
        <EmotionKeywordWrapper>
          <li>
            <EmotionButton emotionTitle='평범해요' isText={true} />
          </li>
          <li>
            <EmotionButton emotionTitle='좋아요' isText={true} />
          </li>
          <li>
            <EmotionButton emotionTitle='당황스러워요' isText={true} />
          </li>
          <li>
            <EmotionButton emotionTitle='이상해요' isText={true} />
          </li>
          <li>
            <EmotionButton emotionTitle='별로에요' isText={true} />
          </li>
          <li>
            <EmotionButton emotionTitle='속상해요' isText={true} />
          </li>
        </EmotionKeywordWrapper>
        <BasicButton size='L' isActive={false} disabled={true} type='submit'>
          {'평가하기'}
        </BasicButton>
      </StyleToastPopup>
    </StyleWrapper>
  );
};

export default RatingToastPopup;

const StyleWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9800;
`;

const StyleToastPopup = styled.article`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 698px;
  max-width: 39rem;
  padding: 1.6rem 0 1rem 0;
  border-radius: 16px 16px 0 0;
  background-color: var(--main-bg-color);

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ::before {
    content: '';
    display: block;
    width: 13.4rem;
    height: 4px;
    margin: 0 auto 2.4rem auto;
    background-color: var(--border-color);
  }
`;

const RatingTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  width: 152px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222222;
  margin-bottom: 16px;
  div + & {
    margin-top: 40px;
  }
`;

const EmotionKeywordWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 63px;
  row-gap: 24px;
  margin-bottom: 182px;
`;
