import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
   return (
      <div>
         <StyledHeader>
            <Container>
               <FlexWrapper justifyContent={"space-between"} align={"center"}>
                  <Logo/>
                  <StyledMenu>
                     <ul>
                        <Menu menuItem={"About"}/>
                        <Menu menuItem={"Projects"}/>
                        <Menu menuItem={"Contacts"}/>
                     </ul>

                  </StyledMenu>
               </FlexWrapper>

            </Container>


         </StyledHeader>

      </div>
   );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }

`
const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
   // background-color: rgba(255, 255, 255, 0.24);
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 1170px;


`