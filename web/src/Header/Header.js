import React from 'react';
import styled from 'styled-components';

const HeaderNav = styled.nav`
  background-color: hsl(168 44% 35%);
  box-shadow: 0 2px 10px 5px hsl(0, 0%, 68%);
  padding: 1rem 2rem;
  width: 100%;
`;
const TitleNav = styled.h1`
  color: hsl(0 0% 100%);
  margin: 0;
`;


function Header() {
  return(
    <HeaderNav>
      <TitleNav>OrderApp</TitleNav>
    </HeaderNav>
  );
}
export default Header;
