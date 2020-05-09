import React from 'react';
import NavBar from '../../components/NavBar';
import Rotas from '../../rotas';
import { ContainerStyled } from './style';

export default function Base() {
  return (
    <>
      <NavBar />
      <ContainerStyled>
        <Rotas />
      </ContainerStyled>
    </>
  );
}
