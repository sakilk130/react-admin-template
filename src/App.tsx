import { CssBaseline, ThemeProvider } from '@mui/material';
import TopBar from './components/topbar';
import { ColorModeContext, useMode } from './theme';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <div className="content">
            <TopBar />
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
