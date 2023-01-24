import React from 'react';
import styled from 'styled-components';
import Feed from './Feed/Feed';

const FeedList = () => {
  return (
    <StyleWrapper>
      <StyleUl>
        <Feed key={''} />
        <Feed key={''} />
        <Feed key={''} />
        <Feed key={''} />
        <Feed key={''} />
        <Feed key={''} />
        <Feed key={''} />
      </StyleUl>
    </StyleWrapper>
  );
};

export default FeedList;

const StyleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 8px 16px 0px 16px;
`;

const StyleUl = styled.ul`
  li {
    margin-bottom: 6px;
  }
`;
