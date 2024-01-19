import Drinks from "./components/drinks";
import Buttons from "./components/buttons";
import card from "./components/card";

function App() {
  return (
    <div className="m-5">
      <h1 className="mt-5 mb-5">Liste</h1>
      <Drinks drinks="Coffee" />
      <Drinks drinks="Tee" />
      <Drinks drinks="Beer" />
      <div>
        <h1 className="mt-5 mb-5"> Buttons</h1>
        <Buttons button="Sender" />
      </div>

      <div>
        <h1 className="mt-5 mb-5"> Card</h1>
        <cardname card="John Doe" />
      </div>
    </div>
  );
}

export default App;
