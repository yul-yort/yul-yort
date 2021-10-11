import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "../../reportWebVitals";
import * as serviceWorkerRegistration from "../../serviceWorkerRegistration";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { RouterProvider } from "react-router5";
import { Router } from "router5/dist/types/router";
import { IDependencies } from "../../router/types";
import { Theme } from "@mui/material/styles/createTheme";
import Body from "./components/Body";
import { ErrorBoundary } from "./components/ErrorBoundary";

type IAppInitConfig = {
  router: Router<IDependencies>;
  theme: Theme;
};

export const initApp = ({ router, theme }: IAppInitConfig) => {
  ReactDOM.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          {/* @ts-ignore TODO */}
          <RouterProvider router={router}>
            <ErrorBoundary>
              <Body>
                <App />
              </Body>
            </ErrorBoundary>
          </RouterProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </StrictMode>,
    document.getElementById("root")
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();