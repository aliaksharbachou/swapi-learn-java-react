import { Typography } from '@mui/material';

function About(): JSX.Element {
  return (
    <Typography>
      <Typography sx={{
        color: 'red',
        fontSize: '2rem',
        fontFamily: 'unset',
        background: '#A3C1B9',
      }}
      >
        About me

      </Typography>

      <Typography sx={{
        color: 'black',
        textAlign: 'left',
        fontSize: '1.2rem',
        fontFamily: 'inherit',
      }}
      >
        <h5>
          {' '}
          I am  currently working as a Java Developer in Mbycicle company.
          By now I am studiyng React js and It sounds cool !!!

        </h5>

      </Typography>
    </Typography>
  );
}

export default About;
