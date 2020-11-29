import styled from 'styled-components/macro';

export const Inner = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({direction}) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

`