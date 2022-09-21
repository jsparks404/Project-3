import { Routes, Route } from 'react-router-dom'
import './App.css';
import Generate from './components/Generate';
import Artist from './components/Artist';
import Album from './components/Album';
import AlbumCovers from './components/AlbumCovers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Generate />} />
        <Route path='/artist' element={<Artist />} />
        <Route path='/album/:id' element={<Album />} />
        <Route path='/albumcovers' element={<AlbumCovers />} />
      </Routes>
    </div>
  );
}

export default App;
