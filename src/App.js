import About from './components/About';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Resume from './components/Resume';
import { useState } from 'react';

function App() {
  const [showTimeDelay, setShowTimeDelay] = useState(350);

  return (
    <div className='App'>
      <Header setShowTimeDelay={setShowTimeDelay} />
      <Routes>
        <Route path='/' />
        <Route
          path='/about'
          element={<About showTimeDelay={showTimeDelay} />}
        />
        <Route
          path='/resume'
          element={<Resume showTimeDelay={showTimeDelay} />}
        />
      </Routes>
    </div>
  );
}

export default App;
