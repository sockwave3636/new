import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Nav open={isOpen}>
      <Title>Company</Title>
        <NavMenu>
          <Link to="/home">
            <span>Home</span>
          </Link>
          <Link to="/applicant">
            <span>Ta Applicant</span>
          </Link>
          <Link to="/">
            <span>Department Staff</span>
          </Link>
          <Link to="/">
            <span>Ta Committe</span>
          </Link>
          <Link to="/">
            <span>Instructor</span>
          </Link>
          <Link to="/">
            <span>Contact Us</span>
          </Link>
        </NavMenu>
        <Link to="/">
          <UserImag src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" />
        </Link>
      </Nav>

      <MenuIconContainer>
        <MenuIcon onClick={() => setIsOpen(!isOpen)} />
      </MenuIconContainer>
      <Sidebar open={isOpen}>
        <Nav open={isOpen}>
          <StyledLink to="/home">
            <StyledSpan>Home</StyledSpan>
          </StyledLink>
          <Span />
          <StyledLink to="/applicant">
            <StyledSpan>Ta Applicant</StyledSpan>
          </StyledLink>
          <Span />
          <StyledLink to="/">
            <StyledSpan>Department Staff</StyledSpan>
          </StyledLink>
          <Span />
          <StyledLink to="/">
            <StyledSpan>Ta Committe</StyledSpan>
          </StyledLink>
          <Span />
          <StyledLink to="/">
            <StyledSpan>Instructor</StyledSpan>
          </StyledLink>
          <Span />
          <StyledLink to="/">
            <StyledSpan>Contact Us</StyledSpan>
          </StyledLink>
          <Span />
          <Link to="/profile">
            <UserImag src="/"  alt="logo"/>
          </Link>
        </Nav>
      </Sidebar>
    </>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: transparent;
  display: flex;
  align-items: center;
  padding: 0 3px;
  overflow-x: hidden;
  border-radius: ${(props) => (props.open ? "10px" : "0px")};
  transition: background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: fixed;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
  
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(-110%)"};
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out;
    border-bottom: 1px solid black;
    background-color: ${(props) => (props.open ? "#FF204E" : "transparent")};
  }
`;

const Span = styled.span`
  display: block;
  background-color: black; 
  height: 1px; 
  width: 100%; 
  
`;

const Sidebar = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 70px; // Adjust this value as needed
    left: ${(props) => (props.open ? "0" : "-100%")};
    width: 200px;
    height: calc(100% - 70px);
    background: black;
    transition: left 0.3s ease-in-out;
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: black;

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      color: black;

      &:after {
        content: "";
        height: 2px;
        background: red;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span: after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    margin-left: 0;
    align-items: center;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  color: black;
  text-decoration: none;
  margin-bottom: 10px;
  margin-top: 10px; // Adjust this value as needed
`;

const StyledSpan = styled.span`
  display: block;
  color: black;
  text-decoration: none;
  margin: 10px 0px; // Adjust this value as needed
`;

const MenuIconContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 10px;
    left: 10px; // Adjust this value as needed
    z-index: 999;
    color: black;
  }
`;

const UserImag = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
const Title = styled.h6`
  text-align: center;
  font-size: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    margin-top: 1.2rem;
  }
`;
