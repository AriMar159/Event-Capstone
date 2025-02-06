import React from 'react';
import { Container, AppBar, Typography, Grow, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

// images folder
import events from './images/events.png';

// Styled Components 
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: 'rgba(0,183,255, 1)',
}));

const StyledImage = styled('img')({
  marginLeft: '15px',
});

const App = () => {
  return (
    <Container maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <StyledTypography variant="h2" align="center">
        LinxUp
        </StyledTypography>
        <StyledImage src={events} alt="icon" height="60" />
      </StyledAppBar>
      <Grow in>
        <Container>
          <Box display="flex" justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Box flex={1} p={3}>  
              <Posts />
            </Box>
            <Box flex={1} p={3}>  
              <Form  />
            </Box>
          </Box>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;