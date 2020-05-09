import styled, { css } from 'styled-components';
import { Grid, Typography } from '@material-ui/core';

export const GridTituloStyled = styled(Grid)`
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
`;

export const TypographyTituloStyled = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.contrastText};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 12px;
  }
`;

export const TypographyTipoDadoStyled = styled(Typography)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 8px;
  }
`;

export const TypographyValorDadoStyled = styled(Typography)`
  ${({ green }) =>
    green &&
    css`
      font-weight: bold;
      color: green;
    `}
  ${({ red }) =>
    red &&
    css`
      font-weight: bold;
      color: red;
    `}
`;
