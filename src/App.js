import About from './components/About';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
