import React from 'react';
import styled from "styled-components";

export const Menu = () => {
   return (
      <StyledMenu>
         <ul>
            <StyledLi><a href="">About</a></StyledLi>
            <StyledLi><a href="">Projects</a></StyledLi>
            <StyledLi><a href="">Contacts</a></StyledLi>

         </ul>

      </StyledMenu>
   );
};

const StyledMenu = styled.nav`
   ul {
       display: flex;
       gap: 30px;
   }
   
`
const StyledLi=styled.li`
list-style:none;
   `