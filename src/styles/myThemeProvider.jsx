import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import P from "prop-types";
import { GlobalStyle } from "./global";

export const MyThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

MyThemeProvider.propTypes = {
  children: P.node.isRequired,
};
