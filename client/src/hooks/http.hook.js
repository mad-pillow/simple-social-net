import { useCallback, useState } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState(null);

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
        setWarning({ success: true, data });

        return data;
      } catch (e) {
        setLoading(false);
        setWarning({ success: false, data: JSON.parse(e.message) });
        throw e;
      }
    },
    []
  );

  return { loading, request, warning };
};
