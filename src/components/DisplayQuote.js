import { useState, useEffect } from 'react';

export default function DisplayQuote() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getQuote() {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          method: 'GET',
          headers: { 'X-Api-Key': 'a4jkLzxa11Fyl351KUe2lQ==OqEqrHKzRyti4wax' },
          contentType: 'application/json',
        });
        const result = await response.json();
        setData(result[0]);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        throw new Error(e);
      }
    }
    getQuote();
  }, [setData]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!loading) {
    return <p>Encountered a problem while getting quote</p>;
  }

  return (
    <section>
      <h2>Quote</h2>
      <quote>{data.quote}</quote>
      <p className="author">{data.author}</p>
    </section>
  );
}