import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Contact} from "./layout/sections/contact/Contact";
import {Testimonials} from "./layout/sections/testimonials/Testimonials";
import {theme} from "./styles/Theme";
import {Experience} from "./layout/sections/experience/Experience";


function App() {
   return (
      <StyledDiv className="App">
         <StyledSection>

            <Header />
            <Main/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Testimonials/>
            <Contact/>

         </StyledSection>
      </StyledDiv>
   );
}

export default App;



const StyledSection = styled.section`
  //  max-width: 800px;
    display: flex;
    justify-content: center;
    flex-direction: column;

`
const StyledDiv=styled.section `
    display: flex;
    justify-content: center;
    background-color:  ${theme.colors.primaryBg};
`