import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Header from "./components/header";
import { Outlet, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation()

  return (
    <ThemeProvider theme={theme}>
      {location?.pathname !== '/' && <Header />}
      <Outlet />
    </ThemeProvider>
    )
  
}

export default App;
