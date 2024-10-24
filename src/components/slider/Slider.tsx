import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";
import {Icon} from "../icon/Icons";
import photo from './../../assets/img/photoTest.webp';

export const Slider = () => {
   return (
      <StyledSlider>
         <FlexWrapper direction={"column"} align={"center"} justifyContent={"center"}>
            <Photo src={photo} alt=""/>
            <Slide>
               <StyledIconLeft><Icon iconId={"markOpen"} width={"41"} height={"32"}
                                     viewBox={"0 0 41 32"}/></StyledIconLeft>
               <Text>

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.dipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua Ut enim.

               </Text>
               <StyledIconRight><Icon iconId={"markClose"} width={"41"} height={"32"}
                                      viewBox={"0 0 41 32"}/></StyledIconRight>
               <Name>@Gloria</Name>
            </Slide>
            <Pagination>
               <span> </span>
               <span> </span>
               <span> </span>
            </Pagination>
         </FlexWrapper>


      </StyledSlider>
   );
};

const StyledSlider = styled.div`


`
const Slide = styled.div`

    text-align: center;
    max-width: 800px;
    width: 100%;
    min-height: 300px;

    background-color: white;
    box-shadow: 5px 10px 10px #eae9e9;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Text = styled.p`
    margin-bottom: 50px;
    padding: 30px;


`
const Name = styled.span`

`
const Pagination = styled.span`
    span {
        display: inline-block;

        width: 10px;
        height: 10px;
        margin: 15px 5px;
        border-radius: 5px;
        background-color: ${theme.colors.accent};
    }
`

const Photo = styled.img`
    clip-path: circle(50px at 100px 50px);
    width: 20%;
    height: 20%;
    overflow: hidden;
    position: relative;
    top: 60px;
    left: -20px;
`

const StyledIconLeft = styled.div`
    position: relative;
    top: 10px;
    left: -350px
`
const StyledIconRight = styled.div`
    position: relative;
    top: -30px;
    left: 350px
`