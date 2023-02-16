import {
  Box, List, Typography,
} from '@mui/material';

import ColorForBackGround from './ColorForBackGround';

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
    <Box sx={{
      padding: '1.75rem 3rem',
      backgroundColor: 'white',
      borderRadius: '1rem',
      gridArea: 'skill',

    }}
    >
      <Typography variant="subtitle1" style={{ color: 'blue' }}>Programming Skills</Typography>

      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: '1rem',
        maxHeight: '50%',
      }}
      >
        {statusAndColor.map((pic) => (
          <Typography sx={{
            display: 'flex',
          }}
          >
            <ColorForBackGround color={pic.color} />
            {pic.title}
          </Typography>
        ))}
      </List>
    </Box>
  );
}
export default ProgrammingSkills;
