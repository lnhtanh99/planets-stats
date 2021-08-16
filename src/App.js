import Sky from "./components/Sky/Sky";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: { 
    spartan: {
      fontFamily: 'Spartan'
    },
    antonio: {
      fontFamily: 'Antonio'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Sky />
        <Navbar />
      </>
    </ThemeProvider>

  );
}

export default App;
