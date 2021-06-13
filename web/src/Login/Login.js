import React from 'react';
import styled from 'styled-components';
import background from '../assets/loginBackground.jpg';

const BackgroundLogin = styled.div`
  background-image: url(${background});
  background-size: cover;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  padding-top: 5rem;
  padding-right: 5rem;

  height: 100vh;
  width: 100vw;
`;

const Container = styled.section`
  background-color: hsl(168 44% 35%);
  box-shadow: 7px 7px 10px rgba(0, 0, 0, .4);
  border-radius: .3rem;
  min-height: 20rem;
  text-align: center;
  padding: 0 2rem;
  width: 18.125rem;
`;

const InputLogin = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid hsl(0 0% 100%);
  color: hsl(0 0% 100%);
  font-size: 1.2rem;
  padding: .5rem 1rem;
  margin-top: 1.2rem;
  margin-bottom: .5rem;
  width: 100%;

  &::placeholder {
    color: hsl(0 0% 100%);
  }
  &:focus-visible {
    outline:none;
  }
`;
const TitleLogin = styled.h2`
  color: hsl(0 0% 100%);
  text-align:center;
`;
const ButtonLogin = styled.button`
  background-color: transparent;
  border: 1px solid hsl(0 0% 100%);
  border-radius: .2rem;
  color: hsl(0 0% 100%);
  font-size: 1.3rem;
  margin-top: 2rem;
  padding: .5rem;
  width: 100%;

  &:focus-visible {
    outline: none;
  }
  &:hover {
    background-color: hsl(0 0% 100%);
    border: none;
    color: hsl(168 44% 35%);
  }
`;

function Login() {
  return(
    <BackgroundLogin>
      <Container>
        <TitleLogin>Welcome</TitleLogin>
        <InputLogin placeholder='Username' />
        <InputLogin placeholder='Password' />
        <ButtonLogin>Sing In</ButtonLogin>
      </Container>
    </BackgroundLogin>
  )
}
export default Login;
