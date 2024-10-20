import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icons";

export const Header = () => {
   return (
      <div>
         <StyledHeader>
            <Logo/>
            <Menu/>

         </StyledHeader>

      </div>
   );
};

const StyledHeader = styled.header`
    display: flex;
   
    justify-content: space-between;
    
`