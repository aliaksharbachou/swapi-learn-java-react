import Snowfall from 'react-snowfall';

import { Container } from '@mui/material';

import { BoxAppConfiguratiom } from 'styles';

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

    <Container>
      <BoxAppConfiguratiom>
        <Avatar />
        <PersonDescription />
        <Experience />
        <Education />
        <ProgrammingSkills />
        <Favorites />
        <Contacts />
        <Snowfall />
      </BoxAppConfiguratiom>
    </Container>

  );
}

export default App;
