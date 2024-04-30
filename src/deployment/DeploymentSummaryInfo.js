import * as React from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const products = [
  {
    name: 'Product Updates',
    desc: 'Open SaaS will push the latest updates',
    price: 'Free',
  },
  {
    name: 'Securtiy Bugs',
    desc: 'Open SaaS will manage fixing any detected vulnerabilites',
    price: '$69.99',
  },
];

function DeploymentSummaryInfo({ totalPrice }) {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Deploy Twenty CRM
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

DeploymentSummaryInfo.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default DeploymentSummaryInfo;