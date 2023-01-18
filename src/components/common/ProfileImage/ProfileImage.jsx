import React from 'react';
import styled from 'styled-components';
import { PROFILE_UPLOAD } from 'styles/CommonIcons';
import { PROFILE_DEFAULT } from 'styles/CommonImages';

const ProfileImage = ({ src, alt = '', borderWeight = '4' }) => {
  return (
    <StyleProfileWrapper>
      <UserProfileImage src={PROFILE_DEFAULT} alt={alt} width={`110`} borderWeight={borderWeight} />
      <UploadFileIcon src={PROFILE_UPLOAD} />
    </StyleProfileWrapper>
  );
};

export default ProfileImage;

const StyleProfileWrapper = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  margin: 0 auto 30px;
`;

const UserProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border: ${(props) => props.borderWeight}px solid var(--border-color);
  border-radius: 50%;
`;

const UploadFileIcon = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 36px;
  height: 36px;
  z-index: 10;
`;
