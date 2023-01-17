import React from 'react';

import { CROWN } from 'styles/CommonImages';
import EmotionButton from 'components/common/Buttons/EmotionButton';
import styled from 'styled-components';

const EmotionKeywordCard = () => {
  // 임시 더미 데이터
  const data = [
    { title: '평범해요', count: 100 },
    { title: '좋아요', count: 110 },
    { title: '이상해요', count: 130 },
    { title: '속상해요', count: 200 },
    { title: '별로에요', count: 10 },
    { title: '당황스러워요', count: 10 },
  ];

  const totalCount = (data) => {
    return data.map((data) => data.count).reduce((count, init) => count + init, 0);
  };

  const findMaxCount = (data) => {
    return Math.max.apply(
      null,
      data.map(({ count }) => {
        return count;
      }),
    );
  };

  const maxCountIndex = (data) => {
    const FIND_MAX_COUNT = findMaxCount(data);
    return data.findIndex((object) => object.count === FIND_MAX_COUNT);
  };

  const maxCountRateWidth = (data) => {
    return 1 / (findMaxCount(data) / totalCount(data));
  };

  const MAX_COUNT_RATE_WIDTH = maxCountRateWidth(data);

  return (
    <StyleCard>
      <h3 className='sr-only'>감정키워드 카드</h3>
      <StyleBestEmotion>
        <img src={CROWN} alt='왕관모양 이미지' />
        <EmotionButton possibleClicked={false} clickedImg={true} emotionTitle={data[maxCountIndex(data)].title} />
      </StyleBestEmotion>
      <StyleStatusWrapper>
        {data ? (
          data.map(({ title, count }, index) => (
            <StyleStatus key={'감정키워드상태_' + title}>
              {index === maxCountIndex(data) ? (
                <>
                  <StyleStatusText color='var(--point-color)'>{title}</StyleStatusText>
                  <StyleStatusBar
                    color='var(--point-color)'
                    width={(count / totalCount(data)) * 100 * MAX_COUNT_RATE_WIDTH + 'px'}
                  />
                  <StyleCountText color='var(--point-color)'>{count + '표'}</StyleCountText>
                </>
              ) : (
                <>
                  <StyleStatusText color='var(--main-color)'>{title}</StyleStatusText>
                  <StyleStatusBar
                    color='var(--main-color)'
                    width={(count / totalCount(data)) * 100 * MAX_COUNT_RATE_WIDTH + 'px'}
                  />
                  <StyleCountText color='var(--main-color)'>{count + '표'}</StyleCountText>
                </>
              )}
            </StyleStatus>
          ))
        ) : (
          <></>
        )}
      </StyleStatusWrapper>
    </StyleCard>
  );
};

export default EmotionKeywordCard;

const StyleCard = styled.section`
  width: 358px;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: raw;
  background: var(--sub-color);
  border-radius: 10px;
`;

const StyleBestEmotion = styled.div`
  display: inline-flex;
  position: relative;
  align-items: flex-end;
  margin-right: 36px;
  width: 82px;
  height: 100px;
  > img {
    position: absolute;
    bottom: 60px;
    width: 40px;
    height: 40px;
  }
  > button {
    cursor: default;
    margin-left: 10px;
  }
`;

const StyleStatusWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
`;

const StyleStatus = styled.li`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 4px;
  }
`;

const StyleStatusText = styled.span`
  margin-right: 8px;
  width: 64px;
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.color};
`;

const StyleCountText = styled(StyleStatusText)`
  margin-left: 2px;
  font-size: 10px;
  width: 32px;
`;

const StyleStatusBar = styled.div`
  height: 4px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  border-radius: 2px;
`;
