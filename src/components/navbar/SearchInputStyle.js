import styled from "styled-components";

export const Form = styled.form`
margin-left: 4rem;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;

max-width: 300px;
width: 100%;


background: var(--white);

@media (max-width: 600px) {
  width: 100%;

}
`;

export const Input = styled.input`

width: 100%;
padding: 0.5rem;
font-size: 1rem;

border: none;
outline: none;


border-bottom: 1px solid;
border-color: rgba(0,0,0, 0.5);
background: none;

@media (max-width: 600px) {
  width: 100%;
  background: none;
}
`;