import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LOGO } from 'styles/CommonImages';
import Input from 'components/common/Input/Input';
import BasicButton from 'components/common/Buttons/BasicButton';

const LoginPage = () => {
  return (
    <Main>
      <LogoSection>
        <LogoImg src={LOGO} alt='메인 로고' />
      </LogoSection>
      <LoginSection>
        <LoginForm>
          <LoginInputWrapper>
            <Input id='email' labelText='이메일' inputType='text' placeholder='이메일을 입력하여 주세요.' />
            <Input id='pw' labelText='비밀번호' inputType='password' placeholder='비밀번호를 입력하여 주세요.' />
          </LoginInputWrapper>
          <LoginButton size='L'>로그인</LoginButton>
          <LoginType>
            <GuestLink to='/login'>게스트 로그인</GuestLink>
            <JoinLink to='/join'>회원가입</JoinLink>
          </LoginType>
        </LoginForm>
      </LoginSection>
    </Main>
  );
};

export default LoginPage;

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--main-color);
`;

const LogoSection = styled.section`
  position: absolute;
  height: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LogoImg = styled.img`
  width: 150px;
  height: 150px;
`;

const LoginSection = styled.section`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40%;
  background-color: var(--bg-color);
  border-radius: 20px 20px 0 0;
  padding: 40px 34px;
`;

const LoginForm = styled.form``;

const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
`;

const LoginButton = styled(BasicButton)`
  height: 48px;
  margin-bottom: 14px;
`;

const LoginType = styled.div`
  color: #767676;
  text-align: center;
`;

const GuestLink = styled(Link)`
  &::after {
    content: '';
    display: inline-block;
    clear: both;
    position: relative;
    top: 2px;
    width: 1px;
    height: 12px;
    margin: 0 12px;
    background-color: #c4c4c4;
  }
`;

const JoinLink = styled(Link)``;
