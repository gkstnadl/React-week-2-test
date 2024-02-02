import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderStyle, LogoImgStyle, HomeStyle } from '../styles/HeaderStyledComponent';
import LogoImg from '../assets/bts-logo.png';

function Header() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  return (
    <header>
      <HeaderStyle>
        <LogoImgStyle src={LogoImg} alt="bts-logo" />
        <HomeStyle onClick={goToHome}>HOME</HomeStyle>
      </HeaderStyle>
    </header>
  );
}

export default Header;
