import styled from 'styled-components';

export const SliderWrapper = styled.div`

margin: 1rem;
max-width: 90vw;
width: 100%;
height: 200px;
min-height: 200px;
border: 1px solid;
border-color: var(--black);

@media (max-width: 600px) {
    width: 100%;
    max-width: 80vw;
  }
`