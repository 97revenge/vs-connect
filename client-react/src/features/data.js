import { useEffect } from "react";

const useAsyncStuff = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadAsyncStuff = async () => {
      try {
        const res = await fetch("http://localhost:3001/api");
        const json = await res.json();

        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoaded(true);
      }
    };
  }, []);

  return { data, error, loaded };
};
export default useAsyncStuff;
