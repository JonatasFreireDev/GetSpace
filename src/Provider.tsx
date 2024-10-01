import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ProviderRedux } from "react-redux";
import { store } from "./store";

export function Provider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <ProviderRedux store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ProviderRedux>
  );
}
