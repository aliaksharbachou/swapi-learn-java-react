import {
  List, ListItem, ListItemText, Typography,
} from '@mui/material';
import { Box } from '@mui/system';

function Education():JSX.Element {
  return (
    <Box sx={{
      border: '1px solid white',
      padding: '1.75rem 3rem',
      backgroundColor: 'white',
      borderRadius: '1rem',
      lineHeight: '1rem',
      gridArea: 'education',
    }}
    >
      <Typography variant="subtitle1" style={{ color: 'blue' }}>Education</Typography>

      <List
        style={{
          borderLeft: '5px solid #42efe0', paddingLeft: '10px', borderRadius: '3px',
        }}
      >
        <ListItemText>01 Dukurpuntang Elementary School</ListItemText>
        <ListItemText>01 Sumber Junior Cat High School</ListItemText>
        <ListItemText>06 Oxford, England </ListItemText>
        <ListItem> Shop-Cat - By Now</ListItem>

      </List>

    </Box>
  );
}
export default Education;
