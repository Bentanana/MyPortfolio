import React from 'react';
import photo from '../../../assets/img/photo.webp';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Menu} from "../../../components/menu/Menu";

export const Main = () => {
   return (
      <StyledMain>
         <Container>
            <FlexWrapper align={"center"} justifyContent={"space-between"}>
               <Box>
                  <Title>SOFTWARE DEVELOPER</Title>
                  <Name> Hello, my name is Vahid Navazan</Name>
                  <StyledP>Short text with details about you, what you do or your professional career. You can add more
                     information on the about page.</StyledP>
                  <StyledUl>
                     <Menu menuItem={"Projects"} button={"yes"}/>
                     <Menu menuItem={"LinkedIn"} button={"yes"}/>
                  </StyledUl>
               </Box>

               <PhotoWrapper>
                  <Photo src={photo} alt=""/>
                  <svg width="720" height="629" viewBox="0 0 720 629" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <clipPath id="clip">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
                              fill="#FDC435"/>
                     </clipPath>
                     <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
                           fill="#FDC435"/>
                  </svg>
               </PhotoWrapper>

            </FlexWrapper>
         </Container>
      </StyledMain>


   );
};


const StyledMain = styled.section`
    min-height: 70vh;
`

const Box = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 508px;
    max-height: 408px;
    gap: 20px 0;
`

const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: ${theme.colors.accent};

`

const Name = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 54px;
    font-weight: 700;

`
const StyledP = styled.p`
    color: #969596;
`

const StyledUl = styled.ul`
    display: flex;
    gap: 30px;
    padding: 0;
`


const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    width: 100%;
    max-width: 600px;
    overflow:hidden
  
`
const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    clip-path: url(#clip);
`

