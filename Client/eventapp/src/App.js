import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Box } from '@mui/material';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';  // fetching posts
import events from './images/events.png'; // image
import { styled } from '@mui/material/styles';  

// Styled components using MUI v5
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
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts()); // Dispatch action to get posts
  }, [currentId, dispatch]); 

  return (
    <Container maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <StyledTypography variant="h2" align="center">
          Events
        </StyledTypography>
        <StyledImage src={events} alt="icon" height="60" />
      </StyledAppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
