import React from "react";
import styled from "styled-components";
import Logo from "../../images/logo.png";

function TopHeader() {
  return (
    <>
      <HeaderWrapper>
        <Header>
          <img src={Logo} alt="PokemonLogo" width={300} />
        </Header>
      </HeaderWrapper>
   
    </>
  );
}

export default TopHeader;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fac705;
  box-shadow: 0px 3px 6px #00000016;
`;

const Header = styled.header`
  height: 100px;

  img {
    position: relative;
    top: 30px;
  }
`;
