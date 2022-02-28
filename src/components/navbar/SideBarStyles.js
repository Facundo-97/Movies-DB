import styled from "styled-components";
export const SideBarWrapper = styled.div`
position:fixed;

  color: white;

  height: 100%;
  left: 0px;
  top: 0px;
  
  width: ${(props) => (props.isexpanded ? "-300px" : "4rem")};

  max-width: 300px;

  background: var(--black);

  transition: 0.3s ease-in-out;

  @media (max-width: 600px) {
    max-width: 100vw;
    position: fixed;
    width: ${(props) => (props.isexpanded ? "100vw" : "4rem")};
    z-index: 99;
  }
`;

export const MenuToggleWrap = styled.div`
  width: 100%;
  height: 10vh;

  padding: 10px;
  transition: 0.3s ease-in-out;

  display: flex;
  justify-content: ${(props) => (props.isexpanded ? 'end' : 'center')};
  align-content: center;
  align-items: center;

  &:hover{
    transform: translateX( ${(props) => (props.isexpanded ? '-0.5' : '0.5')}rem);
    color: var(--yellow);
  }
`;

export const NavItemsWrapper = styled.div`
transition: 0.3s ease-in-out;
opacity: ${ (props) => (props.isexpanded ? 1 : 0 )};

`;

export const UserImg = styled.img`
  max-width: 4rem;
  width: 4rem;
  max-height: 4rem;
  height: 4rem;

  border: none;
  border-radius: 100%;
  background: white;
  margin-bottom: 1rem;
`;

export const UL = styled.ul`
  padding-right: 1rem;
  width: 100%;
  height: 100%;
  margin-left: 0.5rem;

  border: none;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  align-content: center;
  
`;

export const LI = styled.li`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  
`;
export const SeccondaryButton = styled.button`
margin: 1rem;
width: 100%;
outline: none;
border: 1px solid;
border-color: var(--white);
color: var(--white);
background: var(--black);
padding: 0.5rem;

font-size: 1rem;

transition: 0.3s ease-in;

&:hover {
  border-color: var(--yellow);
  background: var(--white);
  color: var(--black);
  opacity: 1;
}

@media (max-width: 600px) {
  max-width: 200px;
}

`;
