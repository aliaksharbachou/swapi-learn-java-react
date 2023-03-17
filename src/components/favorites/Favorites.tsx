import { motion } from 'framer-motion';

import { ImageList, ImageListItem } from '@mui/material';

import { BoxBorderStyled, TypographyTitle } from 'styles';

const pics = ['imagine',
  'movie',
  'painting',
  'travel'];
const itemData = ['imagine',
  'movie',
  'painting',
  'travel'];

function Favorites():JSX.Element {
  return (
    <BoxBorderStyled sx={{
      gridArea: 'fav',
    }}
    >
      <TypographyTitle variant="subtitle1">
        Favorites
      </TypographyTitle>

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
      <ImageList sx={{ width: 200, height: 200 }} cols={2} rowHeight={82}>
        {itemData.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`static/images/${item}.png`}
              srcSet={`${item}?w=44&h=44&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </BoxBorderStyled>
  );
}
export default Favorites;
