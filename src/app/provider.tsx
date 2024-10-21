import { AuthLoader } from '#/config/auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, Suspense, useState } from 'react';

type AppProviderProps = {};

export const AppProvider = ({ children }: PropsWithChildren<AppProviderProps>) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // throwOnError: true,
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 1000 * 60,
          },
        },
      })
  );

  return (
    <Suspense fallback={<>Loading...</>}>
      <QueryClientProvider client={queryClient}>
        <AuthLoader renderLoading={() => <>Loading...</>}>{children}</AuthLoader>
      </QueryClientProvider>
    </Suspense>
  );
};
