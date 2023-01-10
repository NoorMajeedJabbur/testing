import { useState, useEffect } from "react";

const useFetch = (path) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com${path}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return { data, setData };
};

export default useFetch;
