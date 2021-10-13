import Axios from "axios";
import { useState } from "react";
import "./App.css";
import "./key";
import RecipeTile from "./RecipeTile";
import Restaurant from "./images/restaurant.png";
// import Search from "./components/Search";

function App() {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);

// toggle claass
  const  [active, setactive] = useState(false);

    const toggleActive = () => {
        active ? setactive(false) : setactive(true);

        console.log(active)
    }

  const YOUR_APP_ID = "75a94702";
  const YOUR_APP_KEY = "27042daf06481145d9f120d3dbf18bd0";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  async function getRecipe() {
    const result = await Axios.get(url);
    setRecipe(result.data.hits);
    console.log(result.data);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipe();
  };
  return (
    <div className="App">
      <div className="animation-area">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="title">
        <img className="img-img" src={Restaurant} alt="" />
        <h2>Food Recipe</h2>
      </div>
      <form className="app-searchForm" onSubmit={onSubmit}>
        <div id="search" className={active ? "active" : ""}>
        <div className="icon" onClick={toggleActive}></div>
        <div className="input">
        <input
          type="text"
          className="app-input"
          placeholder="Enter ingredients"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        </div>
        <input className="app-submit" type="submit" value="Search" />
        {/* <span id="clear" onClick={toggleActive} className={active ? "active" : ""}></span> */}
        </div>
      </form>

      <div className="app-recipes">
        {recipe.map((food) => {
          return <RecipeTile food={food} />;
        })}
      </div>
    </div>
  );
}

export default App;
