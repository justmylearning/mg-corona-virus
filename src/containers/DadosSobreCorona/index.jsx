import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import FiltroPais from '../../components/FiltroPais';
import ApresentacaoSobreCovid from '../../components/ApresentacaoSobreCovid';
import CardDadosCorona from '../../components/CardDadosCorona';

export default function DadosSobreCorona({ getDadosPorPais }) {
  const [dadosCorona, setDadosCorona] = useState();
  const [nomePaisSelecionado, setNomePaisSelecionado] = useState();
  const buscaDadosApi = useCallback(async (pais) => {
    const { data: resultado } = await getDadosPorPais(pais);
    if (Array.isArray(resultado) && resultado.length > 0) {
      const {
        confirmed,
        recovered,
        critical,
        deaths,
        lastUpdate,
      } = resultado[0];
      const dataAtualizacao = lastUpdate
        ? moment(lastUpdate, 'YYYY-MM-DDTHH:mm:ssZ').toDate()
        : null;
      setDadosCorona({
        confirmados: confirmed,
        recuperados: recovered,
        criticos: critical,
        mortes: deaths,
        dataAtualizacao,
      });
    } else {
      setDadosCorona(null);
    }
  }, []);

  useEffect(() => {
    if (nomePaisSelecionado) {
      buscaDadosApi(nomePaisSelecionado);
    }
  }, [nomePaisSelecionado, buscaDadosApi]);

  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={12}>
          <ApresentacaoSobreCovid />
        </Grid>
        <Grid item xs={12}>
          <FiltroPais onPaisChange={setNomePaisSelecionado} />
        </Grid>
      </Grid>
      <Box mt={4} mb={4} />
      {dadosCorona && (
        <Grid container>
          <Grid item xs={12}>
            <CardDadosCorona dados={dadosCorona} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

DadosSobreCorona.propTypes = {
  getDadosPorPais: PropTypes.func.isRequired,
};
