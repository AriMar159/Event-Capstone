import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const SmMargin = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const ActionDiv = styled(Box)({
  textAlign: 'center',
});

export { MainContainer, SmMargin, ActionDiv };
