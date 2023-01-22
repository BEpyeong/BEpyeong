import React from 'react';
import styled from 'styled-components';
import { POST_IMG_DEL } from 'styles/CommonIcons';

const PostImgDeleteButton = () => {
  return (
    <>
      <button type='button'>
        <StylePostImgDelete src={POST_IMG_DEL} />
      </button>
    </>
  );
};

export default PostImgDeleteButton;

const StylePostImgDelete = styled.img`
  width: 63px;
  height: 63px;
  cursor: pointer;
`;
