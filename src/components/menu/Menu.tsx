import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";




type MenuProps = {
   menuItem?: string;
   button?: "no"|"yes";
}

export const Menu = (props: MenuProps) => {

      if (props.button==="yes") {
         return (
      <StyledLi><Link href="" button={"yes"}>{props.menuItem} </Link></StyledLi>)
      } else {
         return (
         <StyledLi><Link href="" >{props.menuItem} </Link></StyledLi> )}

};


const StyledLi = styled.li`
    list-style: none;
`

const Link = styled.a <MenuProps>`
    font-family: 'Raleway', sans-serif;
    width: 500px;
    font-size: 18px;
    color: ${theme.colors.font};
    font-weight: 500;

    &:hover {
        color: red;
        font-weight: 500;
    }
;

    ${props => props.button === "yes" && css<MenuProps>
            `
                background: ${theme.colors.accent};
                border: 2px solid ${theme.colors.accent};
                border-radius: 10px;
                padding: 6px 12px;
                
                font-family: 'Roboto', sans-serif;
                font-size: 18px;
                font-weight: 500;

                &:hover {
                    color: ${theme.colors.font};
                    background:transparent;
                    border: 2px solid ${theme.colors.font};
                }


            `
    }
`