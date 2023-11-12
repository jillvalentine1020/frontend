import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LoginButton from '../login/LoginButton';
import ProfileIcon from '../account/ProfileIcon';
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({ title, setPage }) => {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {isAuthenticated ?
          <Button
            size="small"
            onClick={() => setPage("Create")}
          >
            Create Tutorial
          </Button> : null}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Button
            variant="text"
            onClick={() => setPage("Blog")}
          >{title}</Button>
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {isAuthenticated ? <ProfileIcon setPage={setPage} /> : <LoginButton />}
      </Toolbar>
    </React.Fragment>
  );
}

// Header.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Header;