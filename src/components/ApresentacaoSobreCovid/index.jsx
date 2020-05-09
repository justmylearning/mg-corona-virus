import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
import Box from '@material-ui/core/Box';

export default function ApresentacaoSobreCovid() {
  return (
    <>
      <Box mt={4}>
        <Alert severity="info">
          <AlertTitle>About the data</AlertTitle>
          We collect information from
          <strong> several reliable sources</strong>, like Johns Hopkins CSSE,
          CDC, WHO and a few others.
          <strong> All our sources are verified</strong>, and we avoid
          collecting information that is not confirmed by official authorities.
          Every country sends official reports differently. From once per day to
          every hour. That depends on the scale of the pandemic and the time
          zone. Nevertheless, we are trying to update every new information
          ASAP.
          <br />
          <br />
          If you have any suggestions send to marcogaruthi@hotmail.com.
          <br />
          Be careful
        </Alert>
      </Box>
    </>
  );
}
