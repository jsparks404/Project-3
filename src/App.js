import { Routes, Route } from 'react-router-dom'
import './App.css';
import Generate from './components/Generate';
import Artist from './components/Artist';
import Album from './components/Album';
import AlbumCovers from './components/AlbumCovers';
import AlbumCover from './components/AlbumCover';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Generate />} />
        <Route path='/artist' element={<Artist />} />
        <Route path='/album/:id' element={<Album />} />
        <Route path='/albumcovers' element={<AlbumCovers />} />
        <Route path='/albumcovers/:id' element={<AlbumCover />} />
      </Routes>
    </div>
  );
}

export default App;

// add post option for album covers, readme etc...