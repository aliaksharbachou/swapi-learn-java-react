import { List, Typography } from '@mui/material';
import { Box } from '@mui/system';

const fullStackDeveloper = ' Full Stack Developer';
function PersonDescription():JSX.Element {
  return (
    <Box sx={{
      border: '1px solid white',
      padding: '1.75rem 3rem',
      color: '#5db2ed',
      borderRadius: '1rem',
      backgroundColor: 'white',
      gridArea: 'description',

    }}
    >
      <Typography component="pre" variant="h5" marginTop={2}>
        Mr. Kit
        {'\n'}
        {fullStackDeveloper}

      </Typography>
      <List sx={{ color: 'black' }}>
        Hello, my name is Kit. I am from Scotland and born in Cirebon.
        I am full stack developer for web a lot of experience that I have done in the website world.
        {' '}
      </List>
    </Box>
  );
}
export default PersonDescription;
