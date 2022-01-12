import './App.css';
import Commandpoints from './components/Commandpoints';
import { PlayersDetails } from './components/PlayersDetails';

function App() {
  return (
    <div className="App">
      <div>
        <PlayersDetails />
        <Commandpoints />
      </div>
    </div >
  );
}

export default App;
