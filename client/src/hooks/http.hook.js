import { useCallback, useState } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
        }

        const response = await fetch(url, {
          method,
          body,
          headers,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(JSON.stringify(data) || 'Something went wrong');
        }

        setLoading(false);
        return data;
      } catch (e) {
        console.log(
          '🚀 ~ file: http.hook.js ~ line 31 ~ e',
          JSON.parse(e.message)
        );
        setLoading(false);
        setError(JSON.parse(e.message));
        throw e;
      }
    },
    []
  );

  return { loading, request, error };
};
