import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';

import events from './images/events.png';

const App = () => {
    return (
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">LinxUp</Typography>
        <img src={events} alt="events" height="60" />
        </AppBar>
        <Grow in>
            <Container>
            <Grid container justifyContent="space-between" alignItems="stretch">
                <Grid item xs={12} sm={7}> <Posts />
                </Grid>
                <Grid item xs={12} sm={7}> <Form />
                </Grid>
                <Grid item xs={12} sm={7}>
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
            </Container>
            </Grow>
      </Container>
     
    );
}

export default App;
