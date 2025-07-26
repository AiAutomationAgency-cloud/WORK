import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: (failureCount, error: any) => {
        if (error?.status === 404) return false;
        return failureCount < 3;
      },
      queryFn: async ({ queryKey }) => {
        try {
          const response = await fetch(queryKey[0] as string);
          if (!response.ok) {
            const errorText = await response.text();
            console.error(`API request failed: ${response.status} ${response.statusText}`, errorText);
            throw new Error(`API request failed: ${response.status} ${response.statusText}`);
          }
          return response.json();
        } catch (error) {
          console.error('API request error:', error);
          throw error;
        }
      },
    },
  },
});

const baseURL = "";

export async function apiRequest(endpoint: string, options?: RequestInit) {
  const url = `${baseURL}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}