import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Header from "./components/header";
import Login from "./components/login";

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Header />
      <Login />
    </div>
  </ThemeProvider>
);

export default App;
