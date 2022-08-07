import {
  AppBar,
  Box,
  Link as MuiLink,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';

const Header: FunctionComponent = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  return (
    <AppBar elevation={1}>
      <Box
        display={'flex'}
        alignItems="center"
        justifyContent={'space-between'}
        pl={1}
      >
        <MuiLink component={Link} to={'/'} display={'flex'} alignItems="center">
          <img src="/assets/images/svg/logo.svg" width={122} />
        </MuiLink>
        <List sx={{ display: 'flex' }}>
          <ListItem>
            <MuiLink component={Link} to={'/explore'}>
              <ListItemText> d f s dsa d sad sadg</ListItemText>
            </MuiLink>
          </ListItem>
        </List>
        <Burger />
      </Box>
    </AppBar>
  );
};

export default Header;
