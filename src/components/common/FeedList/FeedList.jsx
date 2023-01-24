import React from 'react';
import styled from 'styled-components';
import Feed from './Feed/Feed';

const FeedList = ({ isTag = true }) => {
  return (
    <StyleWrapper isTag={isTag}>
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
  padding: 0px 16px;
  margin-top: ${(props) => (props.isTag ? '62px' : '0px')};
`;

const StyleUl = styled.ul`
  li {
    margin-bottom: 6px;
  }
`;
