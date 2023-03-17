import * as React from 'react';

import { Switch, Typography } from '@mui/material';
import { enUS, ruRU } from '@mui/material/locale';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

function Localization():JSX.Element {
  const [locale, setLocale] = React.useState(enUS);
  const [checked, setChecked] = React.useState(false);
  const theme = useTheme();
  const themeWithLocale = React.useMemo(
    () => createTheme(theme, locale),
    [theme, locale],
  );
  React.useEffect(() => {
    if (checked) {
      setLocale(ruRU);
    } else {
      setLocale(enUS);
    }
  }, [checked]);
  return (
    <ThemeProvider theme={themeWithLocale}>

      <Typography sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Switch
          checked={checked}
          onChange={() => {
            setChecked(() => !checked);
          }}
        />
        <p>
          {locale === enUS ? 'English (US)'
            : 'Russian (RU)'}

        </p>
      </Typography>
    </ThemeProvider>
  );
}
export default Localization;
