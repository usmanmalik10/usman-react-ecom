import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <Logo
          src="./images/logo1.jpg"
          alt="my logo img"
          width="200"
          height="50"
        />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem; /* Adjust the padding for mobile */
  }
`;

const Logo = styled.img`
  height: 5rem;

  @media (max-width: 300px) {
    /* Styles for mobile when screen width is 300 or less */
    content: url('./images/logo2.jpg');
  }
`;

export default Header;
