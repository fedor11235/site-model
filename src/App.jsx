import { createTheme, colors, ThemeProvider } from '@mui/material';
import './App.css';

import {MuiResponsiveness} from "./components/MuiResponsiveness"

const theme = createTheme({
  palette: {
    status: {
      danger: "#e53e3e"
    },
    secondary: {
      main: colors.orange[500],
    },
    neutral:{
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MuiResponsiveness></MuiResponsiveness>
      </div>
    </ThemeProvider>
  );
}

export default App;
