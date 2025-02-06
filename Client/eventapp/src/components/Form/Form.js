import React from 'react';
import { AppBar, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

// Using styled to customize AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(0,183,255, 1)',
  borderRadius: '15px',
  padding: theme.spacing(2),
}));

const Form = () => {
  return (
    <Container maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Form
        </Typography>
      </StyledAppBar>
      <h1>FORM</h1>
    </Container>
  );
}

export default Form;
