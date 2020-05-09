import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

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
    ? `Last update at ${moment(dataAtualizacao).format('MM-DD HH:mm')}`
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
    },
    {
      titulo: 'Critical',
      valor: criticos,
    },
    {
      titulo: 'Deaths',
      valor: mortes,
    },
  ];

  return (
    <Card className={classes.root} elevation={3}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {dataAtualizacaoFormatada}
        </Typography>
        <Grid container spacing={3}>
          {dadosEstruturados.map(({ titulo }) => (
            <Grid key={titulo} item xs={3}>
              <Typography color="textSecondary" paragraph>
                {titulo}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3}>
          {dadosEstruturados.map(({ titulo, valor }) => (
            <Grid key={`${titulo}-${valor}`} item xs={3}>
              <Typography color="textSecondary" paragraph>
                {valor.toLocaleString()}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      {/*<CardActions>*/}
      {/*  <Button size="small">Atualizar</Button>*/}
      {/*</CardActions>*/}
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
