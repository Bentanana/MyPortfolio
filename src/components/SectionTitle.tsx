import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`

   
    font-family: 'Playfair Display', sans-serif;
    font-size: 36px;
    font-weight: 700;

    color: ${theme.colors.font};
    text-align: center;
    margin-top: 20px;
   margin-bottom: 20px;
    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        display: inline-block;
       
        width: 100%;
        height: 3px;
        background-color: ${theme.colors.accent};
        position: absolute;
        bottom: 0;
        z-index: -1;
    }
`