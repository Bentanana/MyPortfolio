import React from 'react';
import {Icon} from "../icon/Icons";
import styled from "styled-components";
import { IoHome } from "react-icons/io5";
import {theme} from "../../styles/Theme";

export const Logo = () => {
   return (
      <LogoStyled>
         <Link href="" title={"Home"}>
            <IoHome size={"40px"} fill={"#FDC435"}/>
         </Link>
         <Name>Vahid Navazan</Name>
      </LogoStyled>
   );
};

const LogoStyled = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`
const Link=styled.a``

const Name=styled.span`
    font-family: 'Comfortaa', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 60px;
    text-align: left;

`