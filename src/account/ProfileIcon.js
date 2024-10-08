import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { useAuth0 } from "@auth0/auth0-react";

const settings = ['Profile', 'Account', 'Logout'];

const ProfileIcon = ({}) => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const { user, logout } = useAuth0();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleLogout = () => {
        logout({
          logoutParams: {
            returnTo: window.location.origin,
          },
        });
      };

    const handleUserMenu = (setting) => {
        //setPage(setting);
        console.log("setting" + setting);
        setAnchorElUser(null);
        switch(setting) {
            case 'Logout':
              handleLogout();
            default:
              return 'foo';
        }
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={Array.from(user?.nickname)[0]} src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={() => handleUserMenu(setting)}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )

}

export default ProfileIcon;