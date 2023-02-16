import { Typography } from '@mui/material';

const discribeAboutKit = <Typography>Mr.Kit</Typography>;

function Person(): JSX.Element {
  return (
    <Typography
      sx={{
        color: 'black',
        textAlign: 'center',
        fontSize: '1.3rem',
        fontFamily: 'cursive',
        margin: 'auto',
        backgroundColor: 'rgba(255, 251, 255, 0.85)',
        right: 0,
        bottom: '2rem',
        padding: '1rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      {discribeAboutKit}
    </Typography>
  );
}
export default Person;
