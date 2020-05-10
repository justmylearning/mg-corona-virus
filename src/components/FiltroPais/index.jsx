import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import paises from './paises.json';
import Typography from '@material-ui/core/Typography';

export default function FiltroPais({ onPaisChange }) {
  const onChangeHandler = (evt, pais) => {
    onPaisChange(pais ? pais.name : null);
  };

  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <Typography paragraph>
          Discovery all the numbers related to the corona virus in your country!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          onChange={onChangeHandler}
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
    </Grid>
  );
}

FiltroPais.propTypes = {
  onPaisChange: PropTypes.func.isRequired,
};
