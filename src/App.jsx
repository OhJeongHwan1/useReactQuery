import GlobalStyle from './styles/globalStyles';
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import GlobalRoute from './router/router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalRoute />
    </ThemeProvider>
  );
}

export default App;
