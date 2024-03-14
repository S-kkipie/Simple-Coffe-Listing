import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/card";

function App() {
  function clickHandler(boolean) {
    setShowAllProducts(boolean);
  }
  const [showAllProducts, setShowAllProducts] = useState(true);
  const [coffeeList, setCoffeeList] = useState([]);
  const [coffeeListAvailable, setCoffeeListAvailable] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCoffeeListAvailable(
          data.map((value) => {
            if (value.available) {
              return <Card props={value} />;
            }
          })
        );
        setCoffeeList(data.map((value) => <Card props={value} />));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="appContainer">
      <img className="imgBackground" src="./bg-cafe.jpg" alt="" />
      <main>
        <div>
          <img className="imgVector" src="./vector.svg" alt="" />
          <h1>Our Collection</h1>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees
            form different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>
        <div className="options">
          <button onClick={() => clickHandler(true)}>All products</button>
          <button onClick={() => clickHandler(false)}>Available Now</button>
        </div>
        <div className="results">
          {showAllProducts ? coffeeList : coffeeListAvailable}
        </div>
      </main>
    </div>
  );
}

export default App;
