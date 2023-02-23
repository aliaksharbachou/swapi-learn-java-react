import { motion } from 'framer-motion';

import { Box } from '@mui/material';

function Avatar():JSX.Element {
  return (
    <Box sx={{
      gridArea: 'avatar',
    }}
    >
      <motion.img
        src="static/images/start.jpg"
        alt="avatar"
        style={{
          borderRadius: '1rem',
          height: '100%',
          width: '100%',

        }}
        initial={{ opacity: 0, scale: 0, rotateY: 180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ type: 'spring', duration: 2 }}
      />
    </Box>
  );
}
export default Avatar;
