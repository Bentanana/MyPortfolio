import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";

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

    background-color:  #F9FAFF;
;
    justify-content: space-between;
    //  width: 1000px;
`