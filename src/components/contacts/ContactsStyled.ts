import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

export const ContactBox = styled(Box)({
  border: '1px solid white',
  height: '100%',
  gridArea: 'contact',
  padding: '0.2rem',
  backgroundColor: 'white',
  borderRadius: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

});
export const StyledImage = styled('img')({
  width: 28,
  height: 28,
});

export const TypograhyDisplayContact = styled(Typography)({
  display: 'flex',
  width: '50%',
  justifyContent: 'space-between',
});
