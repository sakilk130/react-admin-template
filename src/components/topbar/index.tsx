import {
  DarkModeOutlined as DarkModeOutlinedIcon,
  LightModeOutlined as LightModeOutlinedIcon,
  NotificationsOutlined as NotificationsOutlinedIcon,
  PersonOutlined as PersonOutlinedIcon,
  SearchOutlined as SearchOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
} from '@mui/icons-material';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';

function TopBar() {
  const theme = useTheme();
  const colors: any = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        borderRadius="4px"
        style={{
          backgroundColor: colors.primary[400],
        }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search " />
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TopBar;
