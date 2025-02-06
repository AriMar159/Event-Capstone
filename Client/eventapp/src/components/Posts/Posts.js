import React from 'react';
import { AppBar, Typography } from '@mui/material'; // Import AppBar and Typography
import { styled } from '@mui/material/styles';
import Post from './Post/Post';

// Use `styled` to create a customized AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(0,183,255, 1)',
  borderRadius: 15,
  marginBottom: theme.spacing(3),
}));

const Posts = () => {
  return (
    <>
      {/* Use the styled AppBar */}
      <StyledAppBar position="static" color="inherit">
        <Typography variant="h6" align="center">
          Posts
        </Typography>
      </StyledAppBar>

      <h1>POST</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
