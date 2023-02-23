import { Box } from '@mui/system';

function ColorForBackGround({ color }: {color: string}):JSX.Element {
  return (
    <Box sx={{
      marginRight: '10px',
      height: '20px',
      width: '20px',
      backgroundColor: color,
      borderRadius: '0.25rem',
    }}
    />
  );
}
export default ColorForBackGround;
