import React, { useEffect } from 'react';
import history from '../../services/history';

import { Container } from './styles';

export default function AfterForm() {
  useEffect(() => {
    const formDone = localStorage.getItem('done');

    if (!formDone) {
      history.push('/');
    }
  }, []);

  return (
    <Container>
      <img
        src="https://elogroup.eadplataforma.com/upload/others/logo.png"
        alt="Logo EloGroup"
      />
      <h1>Obrigado por preencher o formulário.</h1>
    </Container>
  );
}
