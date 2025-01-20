import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php`
        );
        setEntries(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { entries, isLoading };
}

export default useFetchData;
