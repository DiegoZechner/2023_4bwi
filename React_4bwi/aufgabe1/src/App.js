import Drinks from "./components/drinks";
import Buttons from "./components/buttons";
import Card from "./components/card";

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
      <h1 className="mt-10 mb-2">Card</h1>
      <Card cardName="John Doe" job="Architect & Engineer" />
    </div>
  );
}

export default App;
