import Hello from './components/Hello';
import Four from './components/Four';
import Home from './components/Home';
import AddColor from './components/AddColor'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/4" element={<Four />} />
            <Route path="/:word" element={<Hello />} />
            <Route path="/:word/:textColor/:backgroundColor" element={<AddColor />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
