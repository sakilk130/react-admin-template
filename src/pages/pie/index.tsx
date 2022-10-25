import { Box } from '@mui/material';
import Header from '../../components/header';
import PieChart from '../../components/pie-chart';

const PiePage = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default PiePage;
