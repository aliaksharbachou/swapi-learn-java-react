import { Container } from '@mui/material';

import SimplePage from './components';

function App(): JSX.Element {
  return (
    <Container sx={{
      color: '#d1453b',
      textAlign: 'center',
      fontSize: '1rem',
      fontFamily: 'sans-serif',
      margin: 'auto',
      backgroundColor: 'rgba(255, 251, 255, 0.85)',
      right: 0,
      bottom: '2rem',
      padding: '1rem',
      boxShadow: '0 0 10px rgba(55, 55, 0, 0.3)',
    }}
    >
      <SimplePage />
    </Container>
  );
}

export default App;
