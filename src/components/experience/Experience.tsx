import { List, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';

function Experience():JSX.Element {
  return (
    <Box sx={{
      border: '1px solid white',
      padding: '1.75rem 3rem',
      backgroundColor: 'white',
      borderRadius: '1rem',
      gridArea: 'experience',
    }}
    >
      <Typography variant="subtitle1" style={{ color: 'blue' }}>Experience</Typography>

      <List
        style={{
          borderLeft: '5px solid #42efe0', paddingLeft: '10px', borderRadius: '3px',
        }}

      >
        <ListItemText>
          Vice Leader in Europe
        </ListItemText>
        <ListItemText>Lead Big Group Cats</ListItemText>
        <ListItemText>Tel-U International</ListItemText>
        <ListItemText>Staff Media at Center</ListItemText>
        <ListItemText>Coordinator at Arena</ListItemText>
        <ListItemText>Kabinet Bisha Muda</ListItemText>
      </List>

    </Box>
  );
}
export default Experience;
