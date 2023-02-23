import { ListItem } from '@mui/material';
import { Box, styled } from '@mui/system';

export const EducationBox = styled(Box)({
  border: '1px solid white',
  padding: '1.75rem 3rem',
  backgroundColor: 'white',
  borderRadius: '1rem',
  lineHeight: '1rem',
  gridArea: 'education',
});

export const EducationListItem = styled(ListItem)({
  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  border: '1px solid grey',
  borderRadius: '1rem',
});
