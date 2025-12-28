import { useState, useEffect } from "react";

export default function useMemes() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMemes() {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        setMemes(data.data.memes);
      } catch {
        setError("Failed to load memes");
      } finally {
        setLoading(false);
      }
    }

    fetchMemes();
  }, []);

  return { memes, loading, error };
}
