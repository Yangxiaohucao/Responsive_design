import "./App.css";
import CardList from "./components/card-list/card-list.component";
import JsonData from "./data.json";
function App() {
  return (
    <div className="App">
      <div className="imageContainer">
        <img />
      </div>
      <div className="cardContainer">
        <CardList jsonData={JsonData} />
      </div>
    </div>
  );
}

export default App;
