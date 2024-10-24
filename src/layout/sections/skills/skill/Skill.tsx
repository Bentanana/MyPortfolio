import React from 'react';
import {Icon} from "../../../../components/icon/Icons";
import styled from "styled-components";


type SkillPropsType = {
   iconId: string;
}


export const Skill = (props: SkillPropsType) => {
   return (
      <StyledSkill>
         <Icon iconId={props.iconId} width={"80"} height={"80"} viewBox={"0 0 120 120"}/>
      </StyledSkill>
   );
};

const StyledSkill=styled.div `
    width: 16%;
    max-width: 80px;
    padding: 15px 0;
    margin-left: 50px ;
    margin-right: 50px ;
    
`
