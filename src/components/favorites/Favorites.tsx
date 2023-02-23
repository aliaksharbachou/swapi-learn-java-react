import { motion } from 'framer-motion';

import { BoxBorderStyled, TypographyTitle } from 'styles';

const pics = ['imagine',
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
    </BoxBorderStyled>
  );
}
export default Favorites;
