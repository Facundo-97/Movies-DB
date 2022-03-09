import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

/* --- GLOBAL STYLES --- */
export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    font-family: 'Montserrat' , sans-serif;

    --white: #FFFFFF;
    --black: #2A2F3D;
    --blue-primary: #03045E;
    --blue-secc: #023E8A;
    --light-blue: #00b4D8;
    --light-blue-secc: #48CAE4;
}
`;

/* --- TITTLE STYLES --- */
export const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
`;
export const H2 = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
`;
export const H3 = styled.h3`
  font-size: 1rem;
  font-weight: 600;
`;
export const H4 = styled.h4`
  font-size: 0.8rem;
  font-weight: 500;
`;
export const H5 = styled.h5`
  font-size: 0.7rem;
  font-weight: 500;
`;

/* --- BUTTON STYLES --- */
export const PrimaryButton = styled.button`
  max-width: 200px;
  width: 100%;
  height: 35px;

  outline: none;

  font-size: 1rem;
  font-weight: 800;

  border: 1px solid;
  border-radius: 16px;
  transition: ease 300ms;

  background: var(--blue-primary);
  color: var(--white);
  border-color: var(--black);


  margin: 10px;

  &:hover {
    background: var(--blue-secc);
    border-color: var(--black);
  }
`;
export const SeccondaryButton = styled.button`
  max-width: 200px;
  width: 100%;
  height: 35px;

  outline: none;
  background: white;

  font-size: 1rem;
  font-weight: 800;

  border: 1px solid;
  border-radius: 16px;
  transition: ease 300ms;

  color: var(--blue-primary);
  border-color: var(--blue-primary);

  margin: 10px;

  &:hover {
  background: var(--blue-secc);
  border-color: var(--blue-secc);
  color: var(--white);
  }
`;
export const PrimaryButtonLink = styled(Link)`
  max-width: 200px;
  width: 100%;
  height: 35px;

  outline: none;

  font-size: 1rem;
  font-weight: 800;

  border: 1px solid;
  border-radius: 16px;
  transition: ease 300ms;

  background: var(--blue-primary);
  color: var(--white);
  border-color: var(--black);

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  cursor: pointer;

  margin: 10px;

  &:hover {
    background: var(--blue-secc);
    border-color: var(--black);
  }
`;
export const SeccondaryButtonLink = styled(Link)`
max-width: 200px;
  width: 100%;
  height: 35px;

  outline: none;
  background: white;

  font-size: 1rem;
  font-weight: 800;

  border: 1px solid;
  border-radius: 16px;
  transition: ease 300ms;

  color: var(--blue-primary);
  border-color: var(--blue-primary);

  margin: 10px;

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
  border-color: var(--blue-secc);
  color: var(--blue-secc);
  }
`;

/* --- SPINNER STYLES --- */
export const LoadingSpinnerWrapper = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: absolute;
  font-size: 2rem;

  @keyframes background{
    0% {background: rgba(0,0,0, 0.5);}
    30% {background: rgba(0,0,0, 0.7);} 
    50% {background: rgba(0,0,0, 0.9);}
    70% {background: rgba(0,0,0, 0.7);}
    100% {background: rgba(0,0,0, 0.5);}
  }
  animation: background 3s linear infinite;

`;
export const LoadingSpiner = styled.div`
  width: 100px;
  height: 100px;
  position: relative;

`;
export const SpinnerDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 10px solid transparent;
  border-top-color: var(--light-blue);
  border-radius: 50%;


  @keyframes spinnerOne{
    0% {transform: rotate(0deg); border-width: 10px;}
    50% {transform: rotate(180deg); border-width: 1px;}
    100% {transform: rotate(360deg); border-width: 10px;}
  }

  animation: spinnerOne 1.2s linear infinite;
`;
export const SpinnerDivTwo = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 10px solid transparent;
  border-bottom-color: var(--light-blue);
  border-radius: 50%;

  @keyframes spinnerOne{
    0% {transform: rotate(0deg); border-width: 10px;}
    50% {transform: rotate(180deg); border-width: 1px;}
    100% {transform: rotate(360deg); border-width: 10px;}
  }

  animation: spinnerOne 1.2s linear infinite;
`;

/* --- WRAPPER STYLES --- */
export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;

  color: var(--black);
 
  @media (max-width: 600px){
    height: 100%;
  }

`;

/* --- NAVBAR STYLES --- */
export const NavBarWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  position: fixed;
  z-index: 90;
  cursor: pointer;
  height: 10vh;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  color: var(--blue-primary);

  background: rgba(255,255,255, 0.9);
  border-bottom: 1px solid rgba(0,0,0, 0.2);
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  

  @media (max-width: 600px) {
    width: 100vw;
    height: 10vh;
  }
`;
export const MenuWrapper = styled.div`
  max-width: 200px;
  width: 100%;
  height: 10vh;
  
  margin-right: 1rem;

  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
`;
export const UserImg = styled.img`
  max-width: 3rem;
  width: 3rem;
  max-height: 3rem;
  height: 3rem;


  border-radius: 100%;
  background: var(--blue-primary);
`;
export const FloatMenu = styled.div`
z-index: 90;

position: absolute;
top: 11vh;   
right: 2rem;

max-width: 200px;
width: ${(props) => props.showMenu ? '100%' : '0px'};
height: ${(props) => props.showMenu ? '40vh' : '0vh'};

box-shadow: ${(props) => props.showMenu ? ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)' : ''};
background ${(props) => props.showMenu ? 'rgba(255,255,255, 0.9);' : 'rgba(255,255,255, 0.2)'};
transition: ease 0.3s;

color: var(--black);

border-radius: 4px;
overflow: hidden;

`;
export const UlMenu = styled.ul`
position: relative;

width: 100%;
height: 100%;

display: flex;
flex-direction: column;
justify-content: start;
align-content: center;
align-items: center;

list-style: none;
text-decoration: none;
`;
export const MenuItem = styled.li`

transition: ease 0.3s;

width: 100%;

display:flex;
flex-direction: row;
justify-content: space-between;
align-content: center;
align-items: center;

position: relative;
padding: 1rem;

font-weight: 700;

&:hover{
  color: var(--white);
  background: var(--blue-secc);
}
`;
export const LogoutButton = styled.button`

transition: ease 0.3s;

font-weight: 700;

width: 80%;
height: 40px;

margin: 1rem;
padding: 0.3rem;

border-radius: 16px;
border: 1px solid var(--blue-primary);

color: var(--blue-primary);

font-size: 1rem;

&:hover{

  background: var(--blue-secc);

color: var(--white);

}


`;

/* --- LANDING PAGE STYLES --- */
export const PageWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 10vh;  
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  transition: ease-in 1s;

  widht:100%;  
  height: 100%;


  @media (max-width: 600px){
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    alig-items:center;
      
  }
`;
export const ColOneWrapper = styled.div`
  width:50%;
  height: 100%;
  transition: ease-in 1s;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  H1{
    
    padding: 1rem;
    font-size: 3rem;
  }
  H3{
    padding: 1rem;
    font-size: 1.5rem;
  }

  @media (max-width: 600px){
  padding: 0;
  width:100%;
  height:90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  H1{
    padding: 1rem;
    font-size: 2rem;
  }
  H3{
    padding: 1rem;
    font-size: 1rem;
  }
  }
`;
export const ColTwoWrapper = styled.div`
  width:50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  transition: ease-in 1s;
  

  @media (max-width: 600px){
    width:100%;
    height:90vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

`;

/* --- FORM STYLES --- */
export const LoginFormWrapper = styled.div`

  background: none;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  @media (max-width: 600px) {
    background: var(--black);
    color: var(--white);
  }
`;
export const Form = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;


  padding: 1rem;

  width: 100%;
  height: 100%;

  H2{
    color: var(--black);
  }
  H3{
    color: var(--white);
  }

  @media (max-width: 600px) {
    background: var(--white);
  
    H2{
      color: var(--blue-primary);
    }

    H3{
      color: var(--blue-secc);
    }
  }
`;
export const TextFielfWrapper = styled.div`

  display:flex;
  flex-direction:column;
  justify-content: start;
  align-content: start;
  align-items: start;

  position: relative;
  max-width: 200px;
  width: 100%;

  
  border-bottom: 2px solid var(--blue-secc);
  padding-top: 20px ;
  

  @media (max-width: 600px){
    border-bottom: 2px solid var(--blue-secc);
    width: 50%;
  }
`;
export const Input = styled.input`

  width: 100%;
 
  max-height: 20px;
  height: 100%;

  padding: 3px;

  border: none;
  
  outline: none;
  background: var(--white);
  transition: 0.5s ease;
  color: var(--black);

  &:focus ~ Label, &:valid ~ Label{
    top: 10px;
    color: var(--blue-primary);
  }

  @media (max-width: 600px){
    border-radius: 0px;
    &:focus ~ Label, &:valid ~ Label{
      top: 10px;

      color: var(--light-blue-secc);
    }
    
  }
`;
export const Label = styled.label`
  position: absolute;
  left: 10px;
  top: 70%;

  color: var(--blue-primary); 
 
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.5s ease;
`;
export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  padding: 1rem;

  width: 100%;
  height: 100%;

H2{
  color: var(--white);    
}
H3{
  color: var(--white);
}

@media (max-width: 600px) {
  background: var(--white);

  H2{
    color: var(--blue-primary);
  }

  H3{
    color: var(--blue-secc);
  }
}

`;

/* --- MAIN PAGE STYLES --- */
export const MainPageWrapper = styled.div`
  padding-top: 10vh;
  margin: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media (max-width: 600px) {
    width: 100vw;
    height: 100%;
    overflow: hidden;
  }
`;

/* --- SEARCH PAGE STYLES */
export const SearchPageWrapper = styled.div`
padding-top: 10vh;
margin: 1rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
`;
export const MoviesContainer = styled.div`
padding-top: 10px;
margin-top: 1rem;
background: var(--black);
color: var(--white);
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: center;
align-items: center;
`;

/* --- MOVIE PAGE STYLES --- */
export const MoviePageWrapper = styled.div`
width: 100%;
height: 100%;

max-width: 100vw;
max-height: 90vh;

margin-top: 10vh;
padding: 1rem;

display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
align-items: center;

background: var(--black);
color: var(--black);
`;
export const ImgContainer = styled.div`

width: 50%;
height: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;

background: rgba(255,255,255, 0.9);
`;
export const MovieTextContainer = styled.div`

width: 50%;
height: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-content: start;
align-items: start;

background: rgba(255,255,255, 0.9);
`;

/* --- SEARCH FORM STYLES --- */
export const SearchFormWrapper = styled.div`
color: var(--white);
width: 100%;
height: 200px;
min-height: 200px;

display: flex;
flex-direction: column;
justify-content: space-around;
align-content: center;
align-items: center;

box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
background: linear-gradient(to bottom, var(--black) 10%,  var(--black)50%);

`;
export const FormWrapper = styled.form`
overflow: hidden;
position: relative;
width: 50%;
height: 30px;
background: black;

display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
align-items: center;

border-radius: 16px;
`;
export const SearchInput = styled.input`
height: 100%;
width: 100%;

outline: none;
border: none;

opacity: 0.9;
border-radius: 16px;
padding-left: 1rem;
`;
export const SearchButton = styled.button`
font-size: 1 rem;
font-weight: 700;
color: var(--white);
background: var(--blue-primary);

right: -1px;
height: 33px;
width: 100px;

position: absolute;
border: none;
outline: none;

border-radius: 16px;

display: flex;
flex-direction: row;
align-content: center;
align-items: center;
justify-content: space-evenly;

&:hover { 
  background: var(--blue-secc);
}

`;

/* --- SLIDER STYLES --- */
export const SliderWrapper = styled(motion.div)`
  margin: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  max-height: 550px;
  height: 550px;
  width: 100%;
  color: var(--white);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  background: var(--black);

  @media (max-width: 600px) {
    width: 100%;
    height: 300px;
  }
`;
export const TitleWrapper = styled.div`
width: 100%;
height: 30px;
display: flex;
justify-content: center;
`;
export const SliderContainer = styled(motion.div)`
  display: flex;
  cursor: grab;
  height: 500px;
  width: 350px;
  @media (max-width: 600px) {
    width: 200px;
    height: 250px;
  }
  
`;
export const SliderCardWrapper = styled(motion.div)`

  margin: 0.5rem;
  margin-top: 1rem;
  width: 350px;
  height: 450px;
  position: relative;

  @media (max-width: 600px) {
    width: 200px;
    height: 250px;
  }

`;
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
align-content: center;
height: 450px;
width: 300px;

overflow: hidden;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

@media (max-width: 600px) {
  width: 200px;
  height: 250px;
}

`;
export const ImageWrapper = styled.img`
pointer-events: none;
height: 350px;
max-width: 300px;
width: 100%;
object-fit: fill;

@media (max-width: 600px) {
  width: 200px;
  height: 150px;
}
`;
export const TextWrapper = styled.div`
  height: 100%;
  position: relative;
  background: rgba(0,0,0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: start;
  width: 100%;

  transition: ease 0.3s;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover, TextContainer:hover {

  height: 450px;
  white-space: initial;
  position: absolute;
  background: rgba(0,0,0, 0.7);
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 100%;

    &:hover ~ TextContainer {

      height: 250px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: normal;
      position: absolute;
      background: rgba(0,0,0, 0.7);
      }
  }
`;
export const TextContainer = styled.div`
    padding-left: 1rem;
    overflow:hidden;
    width: 100%;

`;

/* --- FLOAT MENU STYLES --- */
export const FloatingWrapper = styled.div`
z-index: 80;
color: var(--black);
width: ${(props) => props.isActive ? '120px' : '40px'};
height: ${(props) => props.isActive ? '160px' : '40px'};
box-shadow: ${(props) => props.isActive ? ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)' : ''};

background ${(props) => props.isActive ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0)'};

border-radius: 4px;
right: 0;
top: 0;

position: absolute;
display: flex;
flex-direction: column;
justify-content: space-between;
align-content: end;
align-items: end;

overflow:hidden;

transition: ease 0.3s;

`;
export const ButtonMenu = styled.div`
right: 5px;
top: 5px;
width: 30px;
height: 30px;

border-radius: 100%;

z-index: 95;

position: absolute;
display: flex;
align-content: center;
align-items: center;
justify-content: center;

background: var(--white);
opacity: 0.7;
transition: ease 0.3s;

&:hover{
  opacity: 1;
  
  }
`;
export const ActionMenu = styled.div`
position: absolute;
top: 40px;
left: 0;
width: 100%;
height: 100%;
background: rgba(255,255,255, 0.9);
`;
export const ActionList = styled.ul`
width: 100%;

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-content: center;
align-items: center;

color: var(--black);
font-weight: 500;
list-style: none;
text-decoration: none;
`;
export const ListItem = styled.li`

display:flex; 
flex-direction: row;
justify-content: space-between;
align-content: center;
align-items: center;

width: 100%;
padding: 0.5rem;

transition: ease 0.3s;

&:hover{
  color: var(--white);
  background: var(--blue-secc);
}

`;

/* --- LOGIN ERROR STYLES ---  */
export const LoginErrorContainer = styled.div`
padding: 2rem;

top: 25%;
left: 25%;
width: 50%;
height: 50%;

background: var(--white);
box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.19);

position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;

z-index: 200;

@media(max-width: 600px){

  width: 90%;
  left: 5%;
}
`;
export const LoginErrorWrapper = styled.div`
width: 100%;
height: 100%;
`;

export const LoginErrorMsg = styled.div`
height: 100%;

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-content: center;
align-items: center;
`;