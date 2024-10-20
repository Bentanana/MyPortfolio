import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icons";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Contact = () => {
   return (
      <StyledContact>
         <FlexWrapper direction={"column"} align={"center"}>
            <StyledForm>
               <SectionTitle>Contact me</SectionTitle>
               <Title>Name</Title>
               <Field placeholder={"name"}/>
               <Title>Email</Title>
               <Field placeholder={"email"}/>
               <Field as={"textarea"} placeholder={"message"}></Field>
            </StyledForm>
            <Button>Send</Button>

            <SocialList>
               <SocialItem>
                  <SocialLink>
                     <Icon height={"38px"} width={"38px"} viewBox={"0 0 38px 38px"} iconId={"instagram"}/>
                  </SocialLink>
               </SocialItem>
               <SocialItem>
                  <SocialLink>
                     <Icon height={"40px"} width={"40px"} viewBox={"0 0 40px 40px"} iconId={"linkidin"}/>
                  </SocialLink>
               </SocialItem>
               <SocialItem>
                  <SocialLink>
                     <Icon height={"42px"} width={"50px"} viewBox={"0 0px 42px 50px"} iconId={"email"}/>
                  </SocialLink>
               </SocialItem>
            </SocialList>

            <Copyright>Madelyn Torff 2021 </Copyright>
         </FlexWrapper>
         <Icon iconId={"footer"} width={"100%"} height={"50%"} viewBox={"500 50 500 500"} />
      </StyledContact>
   );
};

const StyledContact = styled.section`
    min-height: 80vh;
    gap: 10px;

`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0 auto;
`
const Field = styled.input`

`

const Title = styled.span`

`
const SocialList = styled.ul`
    padding: 0;
    display: flex;
    gap: 20px;
    list-style: none;
`
const SocialItem = styled.li`
`
const SocialLink = styled.a`
`

const Copyright=styled.small``