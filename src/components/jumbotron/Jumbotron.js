import React from 'react';
import PropTypes from 'prop-types';
import { Container, Inner, Item, Pane, Title, SubTitle, Image } from './styles/JumbotronStyle';

function Jumbotron({ children, direction= 'row', ...restProps}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>
        {children}
      </Inner>
    </Item>
  )
}

export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }){
  return <Container {...restProps}>{children}</Container>
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }){
  return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }){
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }){
  return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Image = function JumbotronImage({ ...restProps }){
  return <Image {...restProps} />
}


Jumbotron.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.node.isRequired,
};

Jumbotron.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.Image.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.Pane.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.Container.propTypes = {
  children: PropTypes.node.isRequired,
};