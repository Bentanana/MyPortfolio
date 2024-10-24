import React from 'react';
import styled, {css} from "styled-components";


type ProjectProps = {
   title?: string;
   description?: string;
   src?: string;
   position?: "left" | "right";
}
export const Project = (props: ProjectProps) => {
   if (props.position === "left") {
      return (
         <StyledProject>
            <StyledLeft>
               <Title>{props.title}</Title>
               <Description>{props.description}</Description>
               <Button>View Project</Button>
            </StyledLeft>
            <Img position={"left"} src={props.src} alt=""/>
         </StyledProject>

      );
   } else {
      return (

         <StyledProject>
            <Img position={"right"} src={props.src} alt=""/>
            <StyledLeft>

               <Title>{props.title}</Title>
               <Description>{props.description}</Description>
               <Button>View Project</Button>
            </StyledLeft>

         </StyledProject>
      );

   }
};

const StyledProject = styled.div`
    background-color: #ffffff;
    width: 100%;
    max-width: 992px;
    max-height: 524px;
    display: flex;
    border-radius: 30px;
    margin: 40px;
    box-shadow: 5px 10px 10px #eae9e9;
`
const StyledLeft = styled.div`
    //max-width: 540px;
    width: 496px;
    margin-left: 20px;
`

const Title = styled.h3`
`
const Description = styled.p`
    color: #969596;
`
const Img = styled.img <ProjectProps>`
    //496x526
    width: 496px;
    height: 524px;
    object-fit: cover;

    ${props => props.position === "left" && css<ProjectProps>
            `border-bottom-right-radius: 30px;
             border-top-right-radius: 30px`};
    ${props => props.position === "right" && css<ProjectProps>
            `border-bottom-left-radius: 30px;
             border-top-left-radius: 30px`};
`
const Button = styled.button`
`