import { useEffect, useState } from 'react';

const Popular = () => {
  const api_key = '8795061a4129414ea3933d42a06cabe9';

  //set State
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <div>
      <h1>Popular</h1>
    </div>
  );
};
export default Popular;
