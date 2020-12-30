import React, {Component} from 'react';
import {Container, Button} from 'reactstrap';

const Footer = (props) => {
    return (
      <Container id="side-footer">
        <Button outline color="info">SUBMIT EXAM </Button>{' '}
      </Container>
    );
}

export default Footer;