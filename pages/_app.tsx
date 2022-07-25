import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { UiProvider } from "../contexts/UIContext";
import GlobalStyle from "../styles/global";

const theme: DefaultTheme = {
  colors: {
    primary: "#202020",
    secondary: "#e62429",
    third: "#c6a972",
    background: "#151515",
    onSurface: "#fff",
    border: "#ddd",
  },
  fonts: {
    primary: "Roboto, Trebuchet MS, Helvetica, Arial, sans-serif",
    code: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
  },
  breakpoint: {
    mobile: "420px",
    tablet: "760px",
    desktop: "1200px",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <UiProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </UiProvider>
    </ThemeProvider>
  );
}
