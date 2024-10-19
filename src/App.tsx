import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";


function App() {
   return (
      <StyledDiv className="App">
         <StyledSection>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
         </StyledSection>
      </StyledDiv>
   );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;

const StyledSection = styled.section`
  //  max-width: 800px;
    display: flex;
    justify-content: center;
    flex-direction: column;

`
const StyledDiv=styled.section `
    display: flex;
    justify-content: center;
`