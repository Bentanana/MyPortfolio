import React from 'react';
import {Icon} from "../icon/Icons";
import styled from "styled-components";


export const Logo = () => {
   return (
      <LogoStyled>
         <a href="">
            <Icon iconId={'logo'} width={"50"} height={"50"} viewBox={"0 0 60 60"}/>
         </a>
         <p>Tatyana Benevolskaya</p>
      </LogoStyled>
   );
};

const LogoStyled = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`