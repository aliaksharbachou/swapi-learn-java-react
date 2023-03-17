/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, MenuItem, Select } from '@mui/material';

function Language(): JSX.Element {
  const { i18n } = useTranslation();
  const [dropdownLang, setDropdownLang] = useState(i18n.language || 'en');

  const languageHandler = (event:any): void => {
    const newLanguage = event.target.value;
    if (dropdownLang !== newLanguage) {
      setDropdownLang(newLanguage);
      i18n.changeLanguage(newLanguage);
    }
  };

  return (
    <FormControl sx={{
      minWidth: 120,
      gridArea: 'avatar',
    }}
    >
      <Select value={dropdownLang} onChange={languageHandler}>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Español</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Language;
