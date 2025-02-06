import { styled } from '@mui/material/styles';

// Media styling
export const Media = styled('div')({
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
});

// Border styling
export const Border = styled('div')({
  border: 'solid',
});

// Full height card
export const FullHeightCard = styled('div')({
  height: '100%',
});

// Card styles
export const Card = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
});

// Overlay styles
export const Overlay = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
});

// Second overlay styles
export const Overlay2 = styled('div')({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
});

// Grid styles
export const GridContainer = styled('div')({
  display: 'flex',
});

// Details styling
export const Details = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});

// Title styling
export const Title = styled('div')({
  padding: '0 16px',
});

// Card actions styling
export const CardActions = styled('div')({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
});
