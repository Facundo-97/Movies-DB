import styled from "styled-components";

export const NavBarWrapper = styled.div`
position: fixed;
  z-index: 1;
  width: 100%;
  height: 10vh;

  grid-column: 1/13;
  grid-row: 1/2;
  background: var(--black);

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: center;

  padding: 5px;

  @media (max-width: 600px) {

    height:12vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
`;
