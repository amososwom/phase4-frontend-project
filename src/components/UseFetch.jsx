import { useState, useCallback } from 'react';

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (url, method = 'GET', isauth = true, body = null) => {
    setLoading(true);
    let myauth = isauth ? localStorage.getItem('access_token') : null;

    let options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': isauth ? `Bearer ${myauth}` : '',
        'Api-Secret': 'gbv67890',
      },
      body: method === 'POST' || method === 'PUT' || method === 'PATCH' ? JSON.stringify(body) : null,
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
      return { result, error: null };
      
    } catch (error) {
      setError(error);
      setLoading(false);
      return { result: null, error };
    }
  }, []);

  return { data, loading, error, fetchData };
}

export default useFetch;
