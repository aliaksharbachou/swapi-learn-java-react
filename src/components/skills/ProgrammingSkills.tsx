import { Typography } from '@mui/material';

import { BoxBorderStyled, TypographyTitle } from 'styles';

import ColorForBackGround from './ColorForBackGround';
import { ListSkills } from './ProgrammingSkillsStyled';

const statusAndColor = [
  {
    title: 'HTTP',
    color: 'red',
  },
  {
    title: 'JS',
    color: 'yellow',
  },
  {
    title: 'Spring',
    color: 'yellow',
  },
  {
    title: 'JSP',
    color: 'pink',
  },
  {
    title: 'LIFERAY',
    color: 'green',
  },
  {
    title: 'JAVA',
    color: 'brown',
  },
  {
    title: 'CSS',
    color: 'blue',
  },
  {
    title: 'JS',
    color: 'black',
  },
];
function ProgrammingSkills():JSX.Element {
  return (
    <BoxBorderStyled sx={{
      gridArea: 'skill',
    }}
    >
      <TypographyTitle variant="subtitle1">Programming Skills</TypographyTitle>
      <ListSkills>
        {statusAndColor.map((pic) => (
          <Typography sx={{
            display: 'flex',
          }}
          >
            <ColorForBackGround color={pic.color} />
            {pic.title}
          </Typography>
        ))}
      </ListSkills>
    </BoxBorderStyled>
  );
}
export default ProgrammingSkills;
