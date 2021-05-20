import { useEffect, useState } from 'react';
import './App.css';
import Meal from './Components/Meal/Meal';

function App() {

  const [search, setSearch] = useState('');

  const [meals, setMeals] = useState([]);

  const handleClick = event => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  }

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setMeals(data.meals));
  }, [search])


  

  return (
    <div className="container pt-5 pb-5">
      <div className="row">
          <div className="col text-center">
            <h1 className="mb-4">Meal Finder - Find dilicious foods</h1>
            
            <form action="">
              <p><input onChange={handleClick} type="text"/></p>
              <h4>Searching for: {search}</h4>
              <h5>Meal found: {meals?.length || 0}</h5>
            </form>

            <ul>
              
            </ul>
            
          </div>
          
      </div>
      <div className="row meal-content mt-5">
        {
          meals?.map(meal => <Meal meal={meal}></Meal>)
        }
      </div>
    </div>
  );
}

export default App;
