import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(url);
        const json = await data.json();
        setData(json);
        setIsLoading(false);
        setError(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData().catch((error) => {
      setError(error);
    });
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
