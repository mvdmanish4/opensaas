import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LandingPage from './LandingPage';
import SignIn from './signin/SignIn';
import ProductPage from './productdetails/ProductPage';
import DeploymentForm from './deployment/DeploymentForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/productdetails" element={<ProductPage />} />
        <Route path="/deployment" element={<DeploymentForm />} />
      </Routes>
    </Router>
  );
}
