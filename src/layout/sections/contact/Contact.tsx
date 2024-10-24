import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icons";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Menu} from "../../../components/menu/Menu";

export const Contact = () => {
   return (
      <StyledContact>
         <Container>
            <FlexWrapper direction={"column"} align={"center"}>
               <SectionTitle>Contact me</SectionTitle>
               <StyledForm>

                  <Title>
                     Name
                     <Field placeholder={"name"} type={"text"}/>
                  </Title>
                  <Title>Email
                     <Field placeholder={"email"} type={"email"}/>
                  </Title>
                  <Field as={"textarea"} placeholder={"message"}></Field>
                  <Menu menuItem={"Send"} button={"yes"}/>
               </StyledForm>


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
            <Icon iconId={"footer"} width={"100%"} height={"50%"} viewBox={"0 0 1440 344"} fill={"#ff0000"}/>
         </Container>
      </StyledContact>
   );
};

const StyledContact = styled.section`
    min-height: 50vh;
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

const Title = styled.label`
    position: relative;

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

const Copyright = styled.small``