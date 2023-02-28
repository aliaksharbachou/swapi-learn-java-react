import { useState } from 'react';

import {
  ClickAwayListener,
  List, TextField, Typography,
} from '@mui/material';

import { BoxBorderStyled } from 'styles';

const fullStackDeveloper = 'Full Stack Developer';
function PersonDescription():JSX.Element {
  const [edit, setEdit] = useState(false);

  const [textInput, setTextInput] = useState(`Hello, my name is Kit. 
  I am from Scotland and born in Cirebon.I am full stack developer for web a lot of experience that 
  I have done in the website world.`);

  const handleClickAway = (): void => (setEdit(false));

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <BoxBorderStyled sx={{
        gridArea: 'description',
        color: 'blue',
      }}
      >
        <Typography component="pre" variant="h5" marginTop={2}>
          Mr. Kit
          {'\n'}
          {fullStackDeveloper}
        </Typography>

        {edit && (
          <TextField
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            multiline
            fullWidth
            contentEditable
            rows={5}
            maxRows={4}
            onKeyDown={(e) => {
              if (e.code === 'Escape') setEdit(false);
            }}
          />
        ) }

        {!edit && (
          <List
            sx={{
              color: 'black',
              fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            }}
            onClick={() => setEdit(true)}
          >
            {textInput}
          </List>
        )}
      </BoxBorderStyled>
    </ClickAwayListener>
  );
}
export default PersonDescription;
