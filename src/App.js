import { Routes, Route } from 'react-router-dom'
import './App.css';
import Generate from './components/Generate';
import Artist from './components/Artist';
import Album from './components/Album';

function App() {
  return (
    <div className="App">
      <h1>Metal Band Generator</h1>
      
      <Routes>
        <Route path='/' element={<Generate />} />
        <Route path='/artist' element={<Artist />} />
        <Route path='/album' element={<Album />} />
      </Routes>
    </div>
  );
}

export default App;
