import { useEffect, useState } from "react";
import { apiKey } from "../api/apiConfig";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error("data가지고 오기 실패!");
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [ url]);
  return [ data, loading, error ];
}

