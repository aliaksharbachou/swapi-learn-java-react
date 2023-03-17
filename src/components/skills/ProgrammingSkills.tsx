import { useState } from 'react';

import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Typography } from '@mui/material';

import { BoxBorderStyled, getRandomColor, TypographyTitle } from 'styles';

import ColorForBackGround from './ColorForBackGround';
import { ListSkills } from './ProgrammingSkillsStyled';

type StatusAndColorType = {
  title: string,
  color: string,
};

const statusAndColor = [
  {
    title: 'HTTP',
    color: 'red',
  },
  {
    title: 'JS',
    color: 'yellow',
  },
  {
    title: 'Spring',
    color: 'yellow',
  },
  {
    title: 'JSP',
    color: 'pink',
  },
  {
    title: 'LIFERAY',
    color: 'green',
  },
  {
    title: 'JAVA',
    color: 'brown',
  },
  {
    title: 'CSS',
    color: 'blue',
  },
  {
    title: 'JS',
    color: 'black',
  },
];
function ProgrammingSkills():JSX.Element {
  const [, setList] = useState<StatusAndColorType[]>([]);

  const [value, setValue] = useState('');
  const addToList = ():void => {
    const tempArr = statusAndColor;

    tempArr.push({ title: value, color: getRandomColor() });

    setList(tempArr);

    setValue('');
  };

  const [show, toogleShow] = useState(true);
  return (
    <BoxBorderStyled sx={{
      gridArea: 'skill',
    }}
    >
      <TypographyTitle variant="subtitle1">
        Programming Skills
        <Button
          onClick={() => toogleShow(!show)}
        >
          {show ? <EditIcon /> : <DoneIcon />}
        </Button>
      </TypographyTitle>

      <ListSkills>
        {statusAndColor.map((pic) => (
          <Typography sx={{
            display: 'flex',
          }}
          >
            <ColorForBackGround color={pic.color} />
            {pic.title}
          </Typography>
        ))}
        {!show && (
          <Typography className="ProgrammingSkills">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {' '}
            <Button onClick={addToList}>
              <DoneIcon />
            </Button>
          </Typography>
        )}

      </ListSkills>

    </BoxBorderStyled>
  );
}
export default ProgrammingSkills;
