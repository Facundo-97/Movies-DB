import styled from "styled-components";

export const LoginFormWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  align-items: center;
  
  width: 100%;
  padding: 1rem;

  border-radius: 1rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Form = styled.form`

  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  align-items: center;

  width: 100%;
  background: var(--white);

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    background: none;
  }
`;
export const TextFielfWrapper = styled.div`
  position: relative;
  border-bottom: 2px solid var(--black);
  margin: 30px 0;
`;

export const Input = styled.input`
  width: 100%;
  max-height: 40px;
  height: 100%;

  padding: 0 5px;

  border: none;
  outline: none;
  background: none;

  &:focus ~ Label, &:valid ~ Label{
    top: -7px;
    color: var(--blue-secc); 
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  color: var(--black);
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.5s ease;
`;
