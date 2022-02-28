import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  background: rgba(0,0,0, 0.1);

  width: 100%;
  height: 100%;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 600px;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  border-radius: 1rem;

  margin-top: 12vh;
  margin-bottom: 10px;
  padding: 2rem;
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  align-items: center;

  color: var(--black);
  background: var(--white);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);


  @media (max-width: 600px) {
    margin-top: 14vh;
    max-width: 500px;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;

  width: 100%;
  height: 40vh;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
  }

  transition: ease 1s;
`;
