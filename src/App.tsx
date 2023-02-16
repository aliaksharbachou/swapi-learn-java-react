import Snowfall from 'react-snowfall';

import {
  Box,
} from '@mui/material';

import Avatar from './components/avatar/Avatar';
import Contacts from './components/contacts/Contacts';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Favorites from './components/favorites/Favorites';
import PersonDescription from './components/person-description/PersonDescription';
import ProgrammingSkills from './components/skills/ProgrammingSkills';

import './styles.css';

function App(): JSX.Element {
  return (
    <Box
      sx={{
        p: 3,
        maxWidth: '783px',
        margin: '0 auto',
        display: 'grid',
        gridGap: '2rem',
        background: 'linear-gradient(to right bottom, #560089, #82ffa1)',
        // eslint-disable-next-line max-len
        gridTemplateAreas: '"avatar avatar description description description" "experience experience experience education education" "skill skill skill fav fav" "contact contact contact contact contact"',
        gridTemplateColumns: 'repeat(5, 1fr)',
        '@media(max-width: 600px)': {
          gridTemplateAreas: '"avatar" "description" "experience" "education" "skill" "fav" "contact"',
          gridTemplateColumns: '1fr',

        },
      }}
    >

      <Avatar />
      <PersonDescription />
      <Experience />
      <Education />
      <ProgrammingSkills />
      <Favorites />
      <Contacts />
      <Snowfall />
    </Box>
  );
}

export default App;
