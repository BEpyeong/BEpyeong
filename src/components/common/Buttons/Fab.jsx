import React from 'react';
import styled from 'styled-components';
import { CREATE_POST_FAB } from 'styles/CommonIcons';

const Fab = () => {
  return (
    <CreatePostButton>
      <img src={CREATE_POST_FAB} alt='게시글 작성하기' />
    </CreatePostButton>
  );
};

export default Fab;

const CreatePostButton = styled.button`
  z-index: 999;
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--main-color);
  transition: all 0.3s;

  &:hover,
  &:active {
    background-color: var(--point-color);
  }

  img {
    width: 30px;
    height: 30px;
  }
`;
