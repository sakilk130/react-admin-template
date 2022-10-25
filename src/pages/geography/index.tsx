import { Box, useTheme } from '@mui/material';
import GeographyChart from '../../components/geography-chart';
import Header from '../../components/header';
import { tokens } from '../../theme';

const GeographyPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subTitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default GeographyPage;
