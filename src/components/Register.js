import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegisterPage = () => {
  const [phone_no, setphone_no] = useState('');
  const [name,setname] =useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <ImageContainer>
        <img src='/empty-search.svg'  alt="Your description" />
      </ImageContainer>
      <Divider />
      <FormContainer>
        <form >
          <Title>Company name</Title>
          <Title>Log in to your account</Title>

          <InputContainer>
            <Label htmlFor="phone_no">User name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="phone_no">Email</Label>
            <Input
              type="number"
              id="phone_no"
              name="phone_no"
              value={phone_no}
              onChange={(e) => setphone_no(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="phone_no">Phone No</Label>
            <Input
              type="number"
              id="phone_no"
              name="phone_no"
              value={phone_no}
              onChange={(e) => setphone_no(e.target.value)}
              required
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputContainer>

          <ButtonContainer>
            <PrimaryButton type="submit">
              Register
            </PrimaryButton>
            {/* <SecondaryButton type="button">
              Forgot Password?
            </SecondaryButton> */}
          </ButtonContainer>
          <Linker to="/">login</Linker>
        </form>
      </FormContainer>  
    </Container>
  );
};

export default RegisterPage;

const Container = styled.div`
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center; 
  min-height: 80vh;
  width: 80%; 
  margin: 0 auto;
  font-family: sans-serif;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const FormContainer = styled.div`
  flex: 1 0 200px;
  margin: 10px;
  @media screen and (max-width: 768px) {
    flex: 1 0 auto;
  }
`;

const ImageContainer = styled.div`
  flex: 1 0 200px;
  margin: 10px;

  img {
    max-width: 70%; 
    max-height: 70%; 
    display: block; 
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    flex: 1 0 auto;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: #fff;
  margin: 0 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 1px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: transparent;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const PrimaryButton = styled(Button)`
background: linear-gradient(90deg, #FF204E 0%, #A0153E 100%); // Add gradient background
color: #fff;
`;

const SecondaryButton = styled(Button)`
background: linear-gradient(90deg, #A0153E 0%, #5D0E41 100%); // Add gradient background
color: #fff;
`;

const Linker = styled(Link)`
  margin-top: 10px;
`;