import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Navbar';

const Applicant = () => {
  return (
    <>
    <Header />
    <Container>
      <Container2>
          <Title>Applicant</Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
          </p>

          <ButtonContainer>
          <Linker to="/"><PrimaryButton type="submit">
              Login
            </PrimaryButton></Linker>
          </ButtonContainer>
      </Container2>  
      <Divider />
      <ImageContainer>
        <img src='/empty-favorites.svg'  alt="Your description" />
      </ImageContainer>
    </Container>
    </>
  );
};

export default Applicant;

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

const Container2 = styled.div`
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
    max-width: 100%;
    max-height: 100%;
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
  justify-content: center;
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