import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import paises from './paises.json';

export default function FiltroPais({ onPaisChange }) {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Autocomplete
          onChange={(event, { name }) => onPaisChange(name)}
          fullWidth
          id="combo-box-demo"
          options={paises}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="Country name" variant="outlined" />
          )}
          noOptionsText="None country found"
        />
      </Grid>
      {/*<Grid item xs={12} md={3}>*/}
      {/*  <Button variant="contained" color="primary" size="large" fullWidth>*/}
      {/*    SEARCH*/}
      {/*  </Button>*/}
      {/*</Grid>*/}
    </Grid>
  );
}

FiltroPais.propTypes = {
  onPaisChange: PropTypes.func.isRequired,
};
