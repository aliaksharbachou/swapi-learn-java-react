import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { SelectChangeEvent } from '@mui/material';
import { FormControl, MenuItem, Select } from '@mui/material';

export function ChangingLanguage():JSX.Element {
  const { i18n } = useTranslation();
  const [dropdownLang, setDropdownLang] = useState(i18n.language || 'en');
  const languageHandler = (event:SelectChangeEvent<string>): void => {
    const newLanguage = event.target.value;
    if (dropdownLang !== newLanguage) {
      setDropdownLang(newLanguage);
      i18n.changeLanguage(newLanguage);
    }
  };
  return (
    <FormControl sx={{
      minWidth: 120,
    }}
    >
      <Select value={dropdownLang} onChange={languageHandler}>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ru">Rusian</MenuItem>
      </Select>
    </FormControl>

  );
}
