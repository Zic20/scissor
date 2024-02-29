import { useCallback, useState } from "react";

type RequestConfig = {
  method: string,
  body: string
}

const useFetch = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false);
  const baseURL = "https://shorts.zictracks.com/api";

  const sendRequest = useCallback(
    async (requestConfig: RequestConfig, workWithData: (data: {}) => void) => {

      setLoading(true);
      const response = await fetch(baseURL, {
        method: requestConfig.method,
        body: (requestConfig?.body) ? requestConfig.body : "",
      });

      if (!response.ok) {
        setError(true);
      }

      const data = await response.json();
      workWithData(data);
      setLoading(false);
    },
    []
  );

  return { loading, error, sendRequest };
};

export default useFetch;