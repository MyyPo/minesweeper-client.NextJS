import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Layout from "../components/Layout";
import { AuthProvider } from "../context/AuthContext/AuthProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Layout />
        <Component {...pageProps} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
