import React from 'react';
import TabPageAppBar from 'components/common/AppBar/TabPageAppBar';
import ContentsLayout from 'components/layout/ContentsLayout/ContentsLayout';
import NoticeList from 'components/common/NoticeList/NoticeList';
import BasicButton from 'components/common/Buttons/BasicButton';
import styled from 'styled-components';

const NoticePage = () => {
  return (
    <NoticeMain>
      <TabPageAppBar isTapPage={false} tabPageName='알림함' btnList={['체크']} />
      <ContentsLayout padding='0'>
        <NoticeList />
      </ContentsLayout>
      <NoticeCheckButton size='L'>전체확인</NoticeCheckButton>
    </NoticeMain>
  );
};

export default NoticePage;

const NoticeMain = styled.main`
  display: flex;
  flex-direction: column;
`;

const NoticeCheckButton = styled(BasicButton)`
  width: 350px;
  position: fixed;
  text-align: center;
  left: 50%;
  bottom: 80px;
  transform: translateX(-50%);
`;
