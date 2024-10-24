import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {MyExperience} from "./myExperience/MyExperience";
import {theme} from "../../../styles/Theme";

export const Experience = () => {
   // @ts-ignore
   return (
      <StyledExperience>
         <Container>
            <FlexWrapper direction={"column"} align={"center"}>
               <SectionTitle>Experience</SectionTitle>
            </FlexWrapper>
            <FlexWrapper justifyContent={"space-around"} align={"center"} wrap={"wrap"}>

               <MyExperience year={"2021"}
                             description={" ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."}/>
               <MyExperience year={"2022"}
                             description={"Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin"}/>
               <MyExperience year={"2023"}
                             description={"Lorem ipsum dolor met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  et dolore magna aliqua."}/>
               <MyExperience year={"2024"}
                             description={"Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
            </FlexWrapper>
         </Container>
      </StyledExperience>
   );
};

const StyledExperience = styled.section`
    min-height: 40vh;
`

