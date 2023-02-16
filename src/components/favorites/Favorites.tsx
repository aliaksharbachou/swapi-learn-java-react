import { motion } from 'framer-motion';

import {
  Box, Typography,
} from '@mui/material';

const pics = ['imagine',
  'movie',
  'painting',
  'travel'];

function Favorites():JSX.Element {
  return (

    <Box sx={{
      border: '1px solid white',
      padding: '1.75rem 3rem',
      backgroundColor: 'white',
      borderRadius: '1rem',
      gridArea: 'fav',
    }}

    >
      <Typography variant="subtitle1" style={{ color: 'blue' }}>
        Favorites
      </Typography>

      {pics.map((pic) => (
        <motion.img
          whileHover={{
            scale: 1.25,
            transition: { duration: 0.3 },
          }}
          className="animatable"
          whileTap={{ scale: 0.9 }}
          src={`static/images/${pic}.png`}
          alt={pic}
        />
      ))}
    </Box>
  );
}
export default Favorites;
