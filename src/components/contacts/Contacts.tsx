import { Box, Typography } from '@mui/material';

const links = [
  {
    id: 1,
    icon: 'gmail',
    title: 'Gmail',
    email: 'mailto:faciorys@gmail.com',
  },
  {
    id: 2,
    icon: 'github',
    title: 'GitHub',
    email: 'https://github.com/aliaksharbachou',
  },
  {
    id: 3,
    icon: 'linkedin',
    title: 'LinkedIn',
    email: 'https://linkedin.com/aliaksandr-harbachou',
  },
];

function Contacts():JSX.Element {
  return (
    <Box sx={{
      border: '1px solid white',
      height: '100%',
      gridArea: 'contact',
      padding: '0.2rem',
      backgroundColor: 'white',
      borderRadius: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          color: 'blue',
          display: 'flex',
          width: '50%',
          justifyContent: 'space-between',
        }}
      >
        {links.map((link) => (
          <Typography variant="subtitle2">

            <img
              src={`static/icon/${link.icon}.png`}
              width="28"
              height="28"
              alt="icon"
            />
            <a href={link.email}>
              {link.title}
              {'   '}
            </a>
          </Typography>
        ))}

      </Typography>
    </Box>

  );
}
export default Contacts;
