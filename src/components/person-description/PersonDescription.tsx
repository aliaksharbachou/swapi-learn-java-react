import { List, Typography } from '@mui/material';

import { BoxBorderStyled } from 'styles';

const fullStackDeveloper = ' Full Stack Developer';
function PersonDescription():JSX.Element {
  return (
    <BoxBorderStyled sx={{
      gridArea: 'description',
      color: 'blue',
    }}
    >
      <Typography component="pre" variant="h5" marginTop={2}>
        Mr. Kit
        {'\n'}
        {fullStackDeveloper}
      </Typography>

      <List sx={{
        color: 'black',
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      }}
      >
        Hello, my name is Kit. I am from Scotland and born in Cirebon.
        I am full stack developer for web a lot of experience that I have done in the website world.
      </List>
    </BoxBorderStyled>
  );
}
export default PersonDescription;
