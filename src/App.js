import logo from './logo.svg';
import './App.css';
import './pages/style.css';

import { Routes, Route } from 'react-router-dom';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Navbar from './pages/navigation';
import Blog from './pages/blog';
import Upcoming from './pages/upcoming';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Blog />} />;
        <Route path="/upcoming" element={<Upcoming />} />;
      </Routes>
    </div>
  );
}

export default App;
