import { ListItemText } from '@mui/material';

import { BorderListLeft, TypographyTitle } from 'styles';

import { EducationBox, EducationListItem } from './EducationStyled';

function Education():JSX.Element {
  return (
    <EducationBox>
      <TypographyTitle variant="subtitle1">Education</TypographyTitle>
      <BorderListLeft>
        <ListItemText>01 Dukurpuntang Elementary School</ListItemText>
        <ListItemText>01 Sumber Junior Cat High School</ListItemText>
        <ListItemText>06 Oxford, England </ListItemText>
        <EducationListItem>Shop-Cat - By Now</EducationListItem>
      </BorderListLeft>
    </EducationBox>
  );
}
export default Education;
