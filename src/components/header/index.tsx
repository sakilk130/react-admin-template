import { Box, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { tokens } from '../../theme';

interface IHeaderProps {
  title: string;
  subTitle: string;
}

const Header: FC<IHeaderProps> = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography variant="h2" color={colors.grey[100]} fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
