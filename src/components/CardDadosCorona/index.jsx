import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { Box } from '@material-ui/core';
import {
  GridTituloStyled,
  TypographyTipoDadoStyled,
  TypographyTituloStyled,
  TypographyValorDadoStyled,
} from './style';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardDadosCorona({ dados }) {
  const { confirmados, recuperados, criticos, mortes, dataAtualizacao } = dados;
  const dataAtualizacaoFormatada = dataAtualizacao
    ? `Last update ${moment(dataAtualizacao).calendar()}`
    : 'Unknow update date';
  const classes = useStyles();
  const dadosEstruturados = [
    {
      titulo: 'Confirmed',
      valor: confirmados,
    },
    {
      titulo: 'Recovered',
      valor: recuperados,
      green: true,
    },
    {
      titulo: 'Critical',
      valor: criticos,
    },
    {
      titulo: 'Deaths',
      valor: mortes,
      red: true,
    },
  ];

  return (
    <Card className={classes.root} elevation={3}>
      <CardContent>
        <Box mb={2}>
          <GridTituloStyled container justify="center">
            <TypographyTituloStyled align="right" variant="overline">
              {dataAtualizacaoFormatada}
            </TypographyTituloStyled>
          </GridTituloStyled>
        </Box>
        <Grid container spacing={3} justify="center">
          {dadosEstruturados.map(({ titulo }) => (
            <Grid key={titulo} item xs={3} container justify="center">
              <TypographyTipoDadoStyled align="center" variant="overline">
                {titulo}
              </TypographyTipoDadoStyled>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3} justify="center">
          {dadosEstruturados.map(({ titulo, valor, green, red }) => (
            <Grid key={`${titulo}-${valor}`} item xs={3}>
              <TypographyValorDadoStyled
                color="textSecondary"
                paragraph
                align="center"
                variant="overline"
                green={green}
                red={red}
              >
                {valor.toLocaleString()}
              </TypographyValorDadoStyled>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

CardDadosCorona.propTypes = {
  dados: PropTypes.shape({
    confirmados: PropTypes.number.isRequired,
    recuperados: PropTypes.number.isRequired,
    criticos: PropTypes.number.isRequired,
    mortes: PropTypes.number.isRequired,
    dataAtualizacao: PropTypes.object,
  }).isRequired,
};
