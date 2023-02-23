import { ListItemText } from '@mui/material';

import { BorderListLeft, TypographyTitle } from 'styles';

import { ExperienceBox } from './ExperienceStyled';

function Experience():JSX.Element {
  return (
    <ExperienceBox>
      <TypographyTitle variant="subtitle1">Experience</TypographyTitle>
      <BorderListLeft>
        <ListItemText> Vice Leader in Europe</ListItemText>
        <ListItemText>Lead Big Group Cats</ListItemText>
        <ListItemText>Tel-U International</ListItemText>
        <ListItemText>Staff Media at Center</ListItemText>
        <ListItemText>Coordinator at Arena</ListItemText>
        <ListItemText>Kabinet Bisha Muda</ListItemText>
      </BorderListLeft>
    </ExperienceBox>
  );
}
export default Experience;
