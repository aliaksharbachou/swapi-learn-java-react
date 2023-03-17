import {
  useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import {
  ClickAwayListener, List, TextField, Typography,
} from '@mui/material';

import { BoxBorderStyled } from 'styles';

export default function PersonDescription():JSX.Element {
  const [edit, setEdit] = useState(false);

  const handleClickAway = ():void => (setEdit(false));

  const { t } = useTranslation();
  const personName = t('name');
  const fullStackDeveloper = t('status');
  const desciptionPerson = t('textInput');

  const [textInput, setTextInput] = useState(desciptionPerson);

  useEffect(() => {
    setTextInput(desciptionPerson);
  }, [desciptionPerson]);

  return (

    <ClickAwayListener onClickAway={handleClickAway}>
      <BoxBorderStyled sx={{
        gridArea: 'description',
        color: 'blue',
      }}
      >
        <Typography component="pre" variant="h5" marginTop={2}>
          {personName}
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
