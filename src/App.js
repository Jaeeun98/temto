import styled, { ThemeProvider } from "styled-components";
import colors from "./styles/theme";
import Header from "./components/header";
import Navbar from "./components/nav/navbar.tsx";
import { TableProvider } from "./context/table_data_context";
import { CheckboxIdProvider } from "./context/table_checkboxId_context";

import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const pathname = location?.pathname;

  const theme = {
    colors,
  };

  return (
    <TableProvider>
      <CheckboxIdProvider>
        <ThemeProvider theme={theme}>
          {pathname !== "/" && <Header />}
          <Container>
            {pathname !== "/" && <Navbar />}
            <Outlet />
          </Container>
        </ThemeProvider>
      </CheckboxIdProvider>
    </TableProvider>
  );
};

const Container = styled.div`
  display: flex;
`;
export default App;
