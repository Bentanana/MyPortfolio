import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import PjcImg1 from './../../../assets/img/prj1.webp'
import PjcImg2 from './../../../assets/img/prj2.webp'
import PjcImg3 from './../../../assets/img/prj3.webp'
import {Container} from "../../../components/Container";


export const Projects = () => {
   return (
      <StyledProjects>
         <Container>
            <FlexWrapper direction={"column"} align={"center"}>
               <SectionTitle>Projects</SectionTitle>

            </FlexWrapper>
            <FlexWrapper wrap={"wrap"} justifyContent={"center"} align={"space-between"}>

               <Project title={"Project Name"}
                        description={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."}
                        src={PjcImg1}
                        position={"left"}/>
               <Project title={"Project Name"}
                        description={"What was your role, your deliverables, if the project was personal, freelancing."}
                        src={PjcImg2}
                        position={"right"}/>
               <Project title={"Project Name"}
                        description={"You can also add in this description the type of the project, if it was for web, mobile, electron."}
                        src={PjcImg3}
                        position={"left"}/>
            </FlexWrapper>
         </Container>
      </StyledProjects>
   );
};

const StyledProjects = styled.section`
`
