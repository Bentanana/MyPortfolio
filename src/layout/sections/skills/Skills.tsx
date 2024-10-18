import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";


export const Skills = () => {
   return (
      <StyledSkills>

         <SectionTitle>Skills</SectionTitle>

         <FlexWrapper wrap={"wrap"} justifyContent={"space-between"} align={"space-between"} >

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
      </StyledSkills>
   );

};


const StyledSkills = styled.section`
   
    min-height: 100vh;
`