import { motion } from 'framer-motion';

import {
  Box, List, styled, Typography,
} from '@mui/material';

export const BorderListLeft = styled(List)({
  borderLeft: '5px solid #42efe0',
  paddingLeft: '10px',
  borderRadius: '3px',
});
export const TypographyTitle = styled(Typography)({
  color: 'blue',
});
export const BoxBorderStyled = styled(Box)({
  border: '1px solid white',
  padding: '1.75rem 3rem',
  backgroundColor: 'white',
  borderRadius: '1rem',
});

export const BoxAppConfiguratiom = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: '783px',
  margin: '0 auto',
  display: 'grid',
  gridGap: '2rem',
  background: 'linear-gradient(to right bottom, #560089, #82ffa1)',
  gridTemplateAreas: `"avatar avatar description description description" 
  "experience experience experience education education" "skill skill skill fav fav" 
  "contact contact contact contact contact"`,
  gridTemplateColumns: 'repeat(5, 1fr)',
  '@media(max-width: 600px)': {
    gridTemplateAreas: '"avatar" "description" "experience" "education" "skill" "fav" "contact"',
    gridTemplateColumns: '1fr',

  },
}));

export const MotionImg = styled(motion.img)({
  borderRadius: '1rem',
  height: '100%',
  width: '100%',
});
export const resources = {
  en: {
    translation: {
      img: 'static/images/start.jpg',
      name: 'Mr.Kit',
      status: 'Full Stack Developer',
      textInput: 'Describe yourself',
    },
  },
  ru: {
    translation: {
      img: 'static/images/kit.jpg',
      name: 'Мистер Кот',
      status: 'Сеньёр Помидор',
      textInput: 'Опишите себя',
    },
  },
};

export function getRandomColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
