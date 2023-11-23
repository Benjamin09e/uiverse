import { Route, Routes } from "react-router-dom";
import './App.css';
import Homes from "./pages/home/Homes";
import Brower from "./pages/brower/Brower";
import Buttons from "./pages/buttons/Buttons";
import Creators from "./pages/creators/Creators";
import Challenges from "./pages/challenges/Challenges";
import All from "./pages/all/All";
import Cards from "./pages/cards/Cards";
import CheckBoxes from "./pages/checkBoxes/CheckBoxes";
import Forms from "./pages/forms/Forms";

import MyFavorites from "./pages/myFavorites/MyFavorites";
import RabioButtons from "./pages/radioButtons/RabioButtons";
import ToggleSwitches from "./pages/toggleSwitches/ToggleSwitches";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/brower" element={<Brower />} />
        <Route path="/button" element={<Buttons />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/all" element={<All />} />
        <Route path="/cards" element={<Cards/>} />
        <Route path="/checkBoxes" element={<CheckBoxes />} />
        <Route path="/froms" element={<Forms />} />
       
        <Route path="/favorites" element={<MyFavorites />} />
        <Route path="/radio" element={<RabioButtons />} />
        <Route path="/toggle" element={<ToggleSwitches />} />
      </Routes>
    </div>
  );
}

export default App;
