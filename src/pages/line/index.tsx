import { Box } from '@mui/material';
import Header from '../../components/header';
import LineChart from '../../components/line-chart';

const LinePage = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default LinePage;
