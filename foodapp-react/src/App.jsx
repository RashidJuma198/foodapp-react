import { useState } from "react";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <Foodlist foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
