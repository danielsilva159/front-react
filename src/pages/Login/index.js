import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyled';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/exemple/actions';

export default function Login() {
  const dispach = useDispatch();
  function handleClick(e) {
    console.log(e);
    dispach(exampleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Mais um paragrafo</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
