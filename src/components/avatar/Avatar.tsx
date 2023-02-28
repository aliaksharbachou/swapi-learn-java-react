import { Box } from '@mui/material';

import { MotionImg } from 'styles';

function Avatar():JSX.Element {
  const onDownload = ():void => {
    const link = document.createElement('a');
    link.download = 'start.jpg';
    link.href = 'static/images/start.jpg';
    link.click();
  };

  return (
    <Box sx={{
      gridArea: 'avatar',
    }}
    >
      <MotionImg
        src="static/images/start.jpg"
        alt="avatar"
        onDoubleClick={onDownload}
        initial={{ opacity: 0, scale: 0, rotateY: 180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ type: 'spring', duration: 2 }}
      />
    </Box>
  );
}
export default Avatar;
