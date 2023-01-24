import React from 'react';
import TabPageAppBar from 'components/common/AppBar/TabPageAppBar';
import ContentsLayout from 'components/layout/ContentsLayout/ContentsLayout';
import NoticeList from 'components/common/NoticeList/NoticeList';
import BasicButton from 'components/common/Buttons/BasicButton';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ReportManagementPage = () => {
  return (
    <>
      <TabPageAppBar isTapPage={false} tabPageName='신고 접수 관리' btnList={['체크']} />
      <ContentsLayout padding='0'>
        <NoticeList children='아이디: {} 게시글ID: {}' />
        <NoticeList children='아이디: {} 게시글ID: {}' />
      </ContentsLayout>
      <NoticeCheckButton size='L'>전체확인</NoticeCheckButton>
    </>
  );
};

export default ReportManagementPage;

const NoticeCheckButton = styled(BasicButton)`
  width: 350px;
  position: fixed;
  text-align: center;
  left: 50%;
  bottom: 80px;
  transform: translateX(-50%);
`;
