import Input from 'components/common/Input/Input';
import ProfileImage from 'components/common/ProfileImage/ProfileImage';
import React from 'react';
import styled from 'styled-components';
import BasicButton from '../../components/common/Buttons/BasicButton';

const JoinMembershipPage = () => {
  return (
    <>
      <StyleWrapper>
        <StyleTitle>{'회원가입'}</StyleTitle>
        <StyleSubTitle>{'나중에 언제든지 변경할 수 있습니다.'}</StyleSubTitle>
        <ProfileImage />
        <form onSubmit>
          <Input labelText='이메일' placeholder='이메일 주소를 입력해주세요.' />
          <Input labelText='비밀번호' placeholder='비밀번호를 설정해 주세요.' />
          <Input labelText='사용자 이름' placeholder='2~8자 이내여야 합니다.' />
          <BasicButton size='M' isActive={false} disabled={true} type='submit'>
            {'BE평 시작하기'}
          </BasicButton>
        </form>
      </StyleWrapper>
    </>
  );
};

export default JoinMembershipPage;

const StyleWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  div + div {
    margin-top: 16px;
  }
  button {
    margin-top: 30px;
  }
`;

const StyleTitle = styled.h1`
  margin-top: 54px;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: var(--text-color);
`;

const StyleSubTitle = styled.p`
  margin-top: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #767676;
  margin-bottom: 30px;
`;
