import './App.css';
import {Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';

import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={
        <IsAnon>
          <LandingPage />
        </IsAnon>
      }/>
      <Route path="/signup" element={
        <IsAnon>
          <SignUpPage/>
        </IsAnon>
        } />
      <Route path="/home" element={
        <IsPrivate>
          <HomePage />
        </IsPrivate>
      } 
      />
      </Routes>
    </div>
  );
}

export default App;
