import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";

export const Testimonials = () => {
   // @ts-ignore
   return (
      <StyledTestimonials>
         <Container>

            <FlexWrapper direction={"column"} align={"center"}>
               <SectionTitle>Testimonials</SectionTitle>
               <Slider/>
            </FlexWrapper>
         </Container>
      </StyledTestimonials>
   );
};

const StyledTestimonials = styled.section`
    min-height: 70vh;
`
