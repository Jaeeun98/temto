import styled, { ThemeProvider } from "styled-components";
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
      <Container>
        {pathname !== "/" && <Navbar />}
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
`;
export default App;
