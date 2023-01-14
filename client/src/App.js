import Sky from "./components/Sky/Sky";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Main from "./components/Main/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PlanetProvider from './contexts/PlanetContext';

const BREAKPOINTS = {
  xs: 0,
  sm: 768,
  md: 1025,
  lg: 1280,
  xl: 1920
};

const breakpointsValues = {
  breakpoints: {
    values: BREAKPOINTS
  }
};

const myTheme = {
  typography: {
    spartan: {
      fontFamily: 'Spartan',
      color: 'white',
    },
    antonio: {
      fontFamily: 'Antonio',
      color: 'white',
    }
  },
}

const theme = createTheme({ ...myTheme, ...breakpointsValues });

function App() {
  return (
    <PlanetProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Sky />
          <Navbar />
          <Switch>
            <Route exact path={["/", "/planets/:id"]}>
              <Main />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </PlanetProvider>

  );
}

export default App;
