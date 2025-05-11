import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import WaterPlant from './components/WaterPlant';
import Frames from './components/Frames';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <WaterPlant />
      <Frames/>
    </div>
  );
}

export default App;
