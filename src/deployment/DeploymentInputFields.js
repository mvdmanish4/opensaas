import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

/*const CenteredContainer = styled(Grid)(({ theme }) => ({
  height: '100vh', // This makes the container take the full height of the viewport
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));*/

export default function DeploymentInputFields() {
  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address1" required>
          AWS Access Key
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Enter your AWS Access Key"
          autoComplete="shipping address-line1"
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address2">AWS Secret</FormLabel>
        <OutlinedInput
          id="address2"
          name="address2"
          type="address2"
          placeholder="Enter your AWS Secret"
          autoComplete="shipping address-line2"
          required
        />
      </FormGrid>
    </Grid>
  );
}