import React from 'react';
import styled from 'styled-components';
import TabPageAppBar from 'components/common/AppBar/TabPageAppBar';
import ContentsLayout from 'components/layout/ContentsLayout/ContentsLayout';
import PostImgAddButton from 'components/common/Buttons/PostImgAddButton';
import PostImgDeleteButton from 'components/common/Buttons/PostImgDeleteButton';
import BasicButton from 'components/common/Buttons/BasicButton';

const AdBannerPage = () => {
  return (
    <>
      <TabPageAppBar isTapPage={false} tabPageName='광고 배너 관리' />
      <ContentsLayout padding='2rem 1.6rem 0 1.6rem'>
        <StyleForm>
          <AdBannerWrapper>
            <PostImgAddButton />
            <PostImgDeleteButton />
            <PostImgDeleteButton />
            {/* TODO: <PostImgDeleteButton /> 가 추가 되면, <PostInputOption/>의 wrap을 nowrap으로 바꿔주기 */}
          </AdBannerWrapper>
          <UploadButton size='L' className>
            작성하기
          </UploadButton>
        </StyleForm>
      </ContentsLayout>
    </>
  );
};

export default AdBannerPage;

const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AdBannerWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 18px;
  overflow-x: auto;
`;

const UploadButton = styled(BasicButton)`
  max-width: 350px;
  position: fixed;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);
`;
