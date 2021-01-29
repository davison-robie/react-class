import './App.css';
import NameProp from "./components/day02/NameProp";
import Contacts from "./components/day02/Contacts";
import State from "./components/day02/State";

function App() {
  return (
    <div className="App">
      <Contacts name="Dace" age="34" school="EFA" graduationYear="2021" />
      <p>=========================================</p>
      <State />
    </div>
  );
}

export default App;


//create a components named Contacts
//Pass name, age, school, graduationYear props into it
//Return an h3 with name, and a p with remaining information