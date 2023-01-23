import React from 'react';
import styled from 'styled-components';
import TabPageAppBar from 'components/common/AppBar/TabPageAppBar';
import ContentsLayout from 'components/layout/ContentsLayout/ContentsLayout';
import BasicIconButton from 'components/common/Buttons/BasicIconButton';
import PostImgAddButton from 'components/common/Buttons/PostImgAddButton';
import PostImgDeleteButton from 'components/common/Buttons/PostImgDeleteButton';
// import PostCheckbox from 'components/common/Buttons/PostCheckbox';
import Date from 'components/common/Buttons/Date';
import BasicButton from 'components/common/Buttons/BasicButton';

const PostUploadPage = () => {
  return (
    <>
      <TabPageAppBar isTapPage={false} tabPageName='글 작성하기' btnList={['검색', '알림']} />
      <ContentsLayout padding='2rem 1.6rem 0 1.6rem'>
        <PostForm>
          <PostInputOption>
            <PostImgAddButton />
            {/* <PostImgDeleteButton /> */}
            {/* TODO: <PostImgDeleteButton /> 가 추가 되면, <PostInputOption/>의 wrap을 nowrap으로 바꿔주기 */}
            <AddInputKeyword type='text' placeholder='#키워드를 등록하여 주세요.' />
          </PostInputOption>

          <UploadTextArea name='' id='' cols='30' rows='10' placeholder='글을 작성하여 주세요.' />
          <CheckBoxWrapper>
            <Date />
          </CheckBoxWrapper>
          <BasicButton size='L'>작성하기</BasicButton>
        </PostForm>
      </ContentsLayout>
    </>
  );
};

export default PostUploadPage;

// form
const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// 1. 사진 추가와 삭제 + 키워드 등록을 감싸는 곳
const PostInputOption = styled.div`
  display: flex;
  flex-wrap: nowrap; // <PostImgDeleteButton />가 추가되면, wrap을 nowrap으로 바꿔주기
  gap: 18px;
  align-items: flex-end;
  overflow: hidden;
`;

// 1-1. 키워드 등록 영역
const AddInputKeyword = styled.input`
  width: 100%;
  height: 60px;
  font-size: var(--fs-lg);
  color: var(--main-color);
  background-color: var(--sub-color);
  border-radius: 12px;
  padding: 8px;

  &::placeholder {
    color: var(--main-color);
    text-align: center;
  }
`;

// 2. textarea
const UploadTextArea = styled.textarea`
  width: 100%;
  height: 340px;
  border-radius: 12px;
  font-size: var(--fs-lg);
  color: var(--main-color);
  background-color: var(--sub-color);
  padding: 8px;
  resize: none;
  overflow-y: auto;

  &::placeholder {
    color: var(--main-color);
    text-align: center;
    padding-top: 36px;
  }
`;

// 3. 게시글 체크 옵션
const CheckBoxWrapper = styled.div`
  margin-bottom: 80px;
`;
