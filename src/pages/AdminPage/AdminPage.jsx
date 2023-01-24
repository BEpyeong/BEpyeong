import React from 'react';
import TabPageAppBar from 'components/common/AppBar/TabPageAppBar';
import ContentsLayout from 'components/layout/ContentsLayout/ContentsLayout';
import CategoryList, { ListWrapper, ListItem } from 'components/common/Category/CategoryList';

const AdminPage = () => {
  return (
    <>
      <TabPageAppBar tabPageName='관리자 페이지' isTapPage='true' />
      <ContentsLayout>
        <CategoryList another={['광고 배너 관리', '신고 접수 관리', '민원 접수 관리']} />
      </ContentsLayout>
    </>
  );
};

export default AdminPage;
