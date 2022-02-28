import styled from "styled-components";

export const MainAppWrapper = styled.div`
position:absolute;

  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  color: var(--white);

  @media (max-width: 600px) {

    min-width: 600px;
  }
`;
