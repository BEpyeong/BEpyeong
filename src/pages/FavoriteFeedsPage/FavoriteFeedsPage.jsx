import TabPageAppBar from 'components/common/AppBar/TabPageAppBar';
import FeedList from 'components/common/FeedList/FeedList';
import TabBar from 'components/common/TabBar/TabBar';
import TagComponent from 'components/common/TagComponent/TagComponent';
import ContentsLayout from 'components/layout/ContentsLayout/ContentsLayout';
import React from 'react';

const FavoriteFeedsPage = () => {
  return (
    <>
      <TabPageAppBar btnList={['검색', '알림']} isTapPage={true} tabPageName='관심목록' />
      <ContentsLayout padding='0'>
        <TagComponent />
        <FeedList />
      </ContentsLayout>
      <TabBar tabPage='Tab_Favorites' />
    </>
  );
};

export default FavoriteFeedsPage;
