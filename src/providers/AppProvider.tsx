import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { ErrorFallback } from "../components/ErrorFallback/ErrorFallback";
import { router } from "../router/Router";
import { theme } from "../utils/styled";

export const queryClient = new QueryClient();

export const AppProvider = () => (
  <ThemeProvider theme={theme}>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ErrorBoundary>
  </ThemeProvider>
);
