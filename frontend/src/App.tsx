import { CssBaseline, ThemeProvider } from '@mui/material';
import { FunctionComponent, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './app/Theme';
import store from './redux/store';

const Home = lazy(() => import('./pages'));

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
