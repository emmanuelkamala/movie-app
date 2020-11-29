import React from 'react';
import { Inner } from './styles/JumbotronStyle';

function Jumbotron({ children, direction= 'row', ...restProps}) {
  return (
    <Inner direction={direction}>
      I am Jumbotron
    </Inner>
  )
}

export default Jumbotron;
