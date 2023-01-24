import React from 'react';
import styled from 'styled-components';
import TabPageAppBar from 'components/common/AppBar/TabPageAppBar';
import ContentsLayout from 'components/layout/ContentsLayout/ContentsLayout';
import CategoryList from 'components/common/Category/CategoryList';
import TabBar from 'components/common/TabBar/TabBar';
import { Link } from 'react-router-dom';
import { MYPAGE_DEFAULT_PROFILE } from 'styles/CommonImages';
import { MYPAGE_PROFILE_MODIFY } from 'styles/CommonIcons';

const MyPage = () => {
  return (
    <>
      <TabPageAppBar btnList={['검색', '알림']} tabPageName='마이페이지' isTapPage='true' />
      <ContentsLayout>
        <MyInfoWrapper>
          <MyInfo>
            <MyInfoProfileImg src={MYPAGE_DEFAULT_PROFILE} alt='나의 프로필 이미지' />
            <MyNickname>최대8글자입니다</MyNickname>
            <Link to=''>
              <ModifyProfileBtn src={MYPAGE_PROFILE_MODIFY} alt='프로필 정보 수정' />
            </Link>
          </MyInfo>
          <MyActivityInfo>
            <MyActivityUl>
              <MyActivityLi>
                <p>작성한 글</p>
                <strong>00000</strong>
              </MyActivityLi>
              <MyActivityLi>
                <p>평가한 글</p>
                <strong>00000</strong>
              </MyActivityLi>
              <MyActivityLi>
                <p>활동포인트</p>
                <strong>00000</strong>
              </MyActivityLi>
            </MyActivityUl>
          </MyActivityInfo>
        </MyInfoWrapper>
        <CategoryList />
      </ContentsLayout>
      <TabBar />
    </>
  );
};

export default MyPage;

const MyInfoWrapper = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: var(--bg-color);
`;

const MyInfo = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MyInfoProfileImg = styled.img`
  width: 48px;
  height: 48px;
`;

const MyNickname = styled.h3`
  font-size: var(--fs-xl);
  margin-top: 4px;
`;

const ModifyProfileBtn = styled.img`
  width: 14px;
  height: 14px;
`;

const MyActivityInfo = styled.div`
  padding: 12px;
`;

const MyActivityUl = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const MyActivityLi = styled.li`
  text-align: center;

  > p {
    font-size: var(--fs-sm);
    color: var(--sub-text-color);
    margin-bottom: 4px;
  }

  > strong {
    font-size: var(--fs-xl);
    color: var(--text-color);
  }
`;
