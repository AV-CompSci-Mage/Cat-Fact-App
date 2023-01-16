import rat from './rat1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rat} className="App-logo" alt="logo" />
        <p>
          Uh Oh! Something went terribly wrong! Please pet the rat while you wait for the Mage to fix it.
        </p>
      </header>
    </div>
  );
}

export default App;

