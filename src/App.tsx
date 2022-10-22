import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/sidebar';
import TopBar from './components/topbar';
import ContactsPage from './pages/contacts';
import DashboardPage from './pages/dashboard';
import InvoicesPage from './pages/invoices';
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
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
