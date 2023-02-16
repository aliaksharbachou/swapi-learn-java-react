import { ShoppingBasket } from '@mui/icons-material';
import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';

function Header(): JSX.Element {
  return (
    <AppBar>
      <Toolbar>
        <Typography>
          MUI Shop
        </Typography>
        <IconButton>
          <ShoppingBasket />

        </IconButton>

      </Toolbar>

    </AppBar>
  );
}

export default Header;
