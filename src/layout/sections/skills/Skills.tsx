import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";


export const Skills = () => {
   return (
      <StyledSkills>
         <Container>
            <FlexWrapper direction={"column"} align={"center"}>
               <SectionTitle>Skills</SectionTitle>
            </FlexWrapper>

               <FlexWrapper wrap={"wrap"} justifyContent={"center"}>

                  <Skill iconId={"vscode"}/>
                  <Skill iconId={"js"}/>
                  <Skill iconId={"css"}/>
                  <Skill iconId={"html"}/>
                  <Skill iconId={"greensock"}/>
                  <Skill iconId={"vector"}/>
                  <Skill iconId={"github"}/>
                  <Skill iconId={"git"}/>
                  <Skill iconId={"react"}/>
                  <Skill iconId={"sass"}/>
                  <Skill iconId={"bootstrap"}/>
                  <Skill iconId={"tw"}/>

               </FlexWrapper>
         </Container>
      </StyledSkills>
   );

};


const StyledSkills = styled.section`
    min-height: 40vh;
`
