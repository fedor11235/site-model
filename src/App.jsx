import { createTheme, colors, ThemeProvider } from '@mui/material';
import './assets/App.css';

import {Main} from "./views/Main"

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
        <Main></Main>
      </div>
    </ThemeProvider>
  );
}

export default App;
