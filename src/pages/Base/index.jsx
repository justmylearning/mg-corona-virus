import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import NavBar from '../../components/NavBar';
import Rotas from '../../rotas';
import { ContainerStyled } from './style';

const theme = createMuiTheme();

export default function Base() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <ContainerStyled>
        <Rotas />
      </ContainerStyled>
    </ThemeProvider>
  );
}
