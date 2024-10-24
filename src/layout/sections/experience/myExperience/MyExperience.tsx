import React from 'react';
import styled from "styled-components";
import { FaCircle } from "react-icons/fa";
import {theme} from "../../../../styles/Theme";


type PropsMyExperience={
   year: string;
   description: string;
}

export const MyExperience = (props: PropsMyExperience) => {
   return (
      <StyledMyExperience>
            <Year>{props.year}</Year>
            <FaCircle />
            <Description>{props.description}</Description>
      </StyledMyExperience>
   );
};

const StyledMyExperience = styled.div`
    width: 25%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Year = styled.h3`

    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
   
`
const Description = styled.p`
margin-top: 20px;
`