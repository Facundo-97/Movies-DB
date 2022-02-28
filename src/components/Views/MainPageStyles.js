import styled from "styled-components";

export const MainPageWrapper = styled.div`
  margin-top: 10vh;
  margin-left: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  background: var(--white);

  @media (max-width: 600px) {
    margin-top: 12vh;
    margin-left: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
`;
