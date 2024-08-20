import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Header from "./components/header";
import Navbar from "./components/navbar.tsx";

import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const pathname = location?.pathname;

  return (
    <ThemeProvider theme={theme}>
      {pathname !== "/" && <Header />}
      {pathname !== "/" && <Navbar />}
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
