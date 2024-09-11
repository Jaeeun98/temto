import styled, { ThemeProvider } from "styled-components";
import colors from "./styles/theme";
import Header from "./components/header";
import Navbar from "./components/nav/navbar.tsx";
import { TableProvier } from "./context/table_data_context";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const pathname = location?.pathname;

  const theme = {
    colors,
  };

  return (
    <TableProvier>
      <ThemeProvider theme={theme}>
        {pathname !== "/" && <Header />}
        <Container>
          {pathname !== "/" && <Navbar />}
          <Outlet />
        </Container>
      </ThemeProvider>
    </TableProvier>
  );
};

const Container = styled.div`
  display: flex;
`;
export default App;
