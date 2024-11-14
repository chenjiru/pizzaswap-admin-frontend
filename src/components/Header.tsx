// components/Header.tsx
import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 13px;
  background-color: rgb(26,30,31);
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;

  img {
    height: 40px;
    width: auto;
  }
`;

const LoginButton = styled.button`
  border: 0px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.03em;
  outline: none;
  box-shadow: none;
  border-radius: 40px;
  transition: background-color 0.2s;
  padding: 7px 20px;
  background-color: #2b70fa;
  color: white;
  &:hover {
    opacity: 0.65;
  }
  &:focus{
    box-shadow: none;
    outline: 0px;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <LoginButton>Login</LoginButton>
    </HeaderContainer>
  );
};

export default Header;
