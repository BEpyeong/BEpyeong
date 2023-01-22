import React from 'react';
import styled from 'styled-components';
import { POST_IMG_ADD } from 'styles/CommonIcons';

const PostImgAddButton = () => {
  return (
    <>
      <label htmlFor='postImg'>
        <StylePostImgAdd src={POST_IMG_ADD} alt='' />
        <input className='sr-only' type='file' id='postImg' accept='image/*' />
      </label>
    </>
  );
};

export default PostImgAddButton;

const StylePostImgAdd = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 3px;
  cursor: pointer;
`;
