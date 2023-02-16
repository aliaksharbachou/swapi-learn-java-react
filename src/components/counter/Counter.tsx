import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

function Counter(): JSX.Element {
  return (
    <Grid>
      <Grid>
        <Typography sx={{
          color: '#d1453b',
          textAlign: 'center',
          fontSize: '2.5rem',
          fontFamily: 'sans-serif',
          margin: 'auto',
          backgroundColor: 'rgba(255, 251, 255, 0.85)',
          right: 0,
          bottom: '2rem',
          padding: '1rem',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',

        }}
        >
          CV GENERATOR
          {' '}
          <BatteryChargingFullIcon sx={{
            color: 'green',
            textAlign: 'right',
            fontSize: '3rem',
          }}
          />
          {' '}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Counter;
