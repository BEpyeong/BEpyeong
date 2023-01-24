import TabPageAppBar from 'components/common/AppBar/TabPageAppBar';
import FeedList from 'components/common/FeedList/FeedList';
import TabBar from 'components/common/TabBar/TabBar';
import TagComponent from 'components/common/TagComponent/TagComponent';
import ContentsLayout from 'components/layout/ContentsLayout/ContentsLayout';
import React from 'react';

const MainPage = () => {
  return (
    <>
      <TabPageAppBar btnList={['검색', '알림']} isTapPage={true} />
      <ContentsLayout padding='0'>
        <TagComponent />
        <FeedList />
      </ContentsLayout>
      <TabBar />
    </>
  );
};

export default MainPage;
