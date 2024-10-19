import React from 'react';
import photo from '../../../assets/img/photo.webp';
import styled from "styled-components";


export const Main = () => {
   return (
      <StyledMain>

         <Box>
            <Title>SOFTWARE DEVELOPER</Title>
            <Name> Hello, my name is Tatyana Benevolskaya</Name>
            <StyledP>Short text with details about you, what you do or your professional career. You can add more
               information on the about page.</StyledP>
            <StyledUl>
               <StyledLi><a href="">Projects</a></StyledLi>
               <StyledLi><a href="">LinkedIn</a></StyledLi>
            </StyledUl>

         </Box>
         <Photo src={photo} alt=""/>

      </StyledMain>


   );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #F9FAFF;
;
    display: flex;
 
`

const Box = styled.section`
display: flex;
    gap: 12px;
    flex-direction: column;
    width: 508px;
    height: 408px;
    padding: 30px;
`

const Title = styled.h1`
    color: #FAD000;
    font-size: 1em;
    margin: 0;
`

const Name = styled.h2`
font-size: 40px;
    margin: 0;

`
const StyledP = styled.p`
    color: #969596;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const StyledUl=styled.ul`
    display: flex;
    gap: 30px;
    padding: 0;
`

const StyledLi=styled.li`
list-style:none;
   `
