import React, { Component } from 'react';
import { ButtonDefaultStyled } from './styles';

class ButtonTeste extends Component {
  function1 = e => {
    console.log('function 1');
  };

  render() {
    return (
      <>
        <ButtonDefaultStyled>
          <button type="button" onClick={this.function1}>
            Click Me!
          </button>
        </ButtonDefaultStyled>
      </>
    );
  }
}

export default ButtonTeste;
