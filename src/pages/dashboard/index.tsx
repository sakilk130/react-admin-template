import { Box } from '@mui/material';
import Header from '../../components/header';

function DashboardPage() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to dashboard" />
      </Box>
    </Box>
  );
}

export default DashboardPage;
