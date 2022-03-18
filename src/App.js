import './App.css';
import ColorPicker from './components/ColorPicker';
import Range from './components/Range';

function App() {
  return (
    <div className="App">
      <h1>CSS GRADIENT GENERATOR</h1>
      <div className='grid'>
      <ColorPicker />
      <ColorPicker />
      <ColorPicker />
      <Range />
      </div>
    </div>
  );
}

export default App;
