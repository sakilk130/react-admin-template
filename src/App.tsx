import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/sidebar';
import TopBar from './components/topbar';
import BarPage from './pages/bar';
import CalenderPage from './pages/calendar';
import ContactsPage from './pages/contacts';
import DashboardPage from './pages/dashboard';
import FAQPage from './pages/faq';
import GeographyPage from './pages/geography';
import InvoicesPage from './pages/invoices';
import LinePage from './pages/line';
import PiePage from './pages/pie';
import ProfileForm from './pages/profile-form';
import TeamPage from './pages/team';
import { ColorModeContext, useMode } from './theme';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/invoices" element={<InvoicesPage />} />
              <Route path="/form" element={<ProfileForm />} />
              <Route path="/calendar" element={<CalenderPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/bar" element={<BarPage />} />
              <Route path="/pie" element={<PiePage />} />
              <Route path="/line" element={<LinePage />} />
              <Route path="/geography" element={<GeographyPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
