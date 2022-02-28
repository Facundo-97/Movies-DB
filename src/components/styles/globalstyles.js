import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    --white: #FFFFFF;
    --black: #2A2F3D;
    --blue-primary: #03045E;
    --blue-secc: #023E8A;
    --light-blue: #00b4D8;
    --light-blue-secc: #48CAE4;

}
`;

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 900;
`;
export const H2 = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
`;
export const H3 = styled.h2`
  font-size: 1rem;
  font-weight: 600;
`;
export const H4 = styled.h2`
  font-size: 0.8rem;
  font-weight: 500;
`;
export const H5 = styled.h2`
  font-size: 0.7rem;
  font-weight: 500;
`;
export const PrimaryButton = styled.button`
  max-width: 200px;
  width: 100%;
  height: 35px;

  border: none;
  outline: none;

  font-size: 1rem;
  font-weight: 600;

  border: 1px solid;
  transition: ease 300ms;

  background: var(--black);
  color: var(--white);
  border-color: var(--white);


  margin: 10px;

  &:hover {
    background: var(--black);
    color: var(--yellow);
    border-color: var(--white);
    opacity: 1;
  }
`;
export const SeccondaryButton = styled.button`
  max-width: 150px;
  width: 100%;
  height: 35px;

  border: none;
  outline: none;

  background: var(--light-blue);
  color: var(--black);
  border: 1px solid;
  border-color: var(--black);
  font-size: 1rem;
  font-weight: 600;

  margin: 10px;

  transition: ease 300ms;

  &:hover {
    border-color: var(--white);
    opacity: 1;
  }
`;
export const LoadingSpinnerWrapper = styled.div`
z-index: 1;
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

