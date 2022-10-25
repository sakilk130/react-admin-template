import { Box } from '@mui/material';
import BarChart from '../../components/bar-chart';
import Header from '../../components/header';

const BarPage = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subTitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default BarPage;
