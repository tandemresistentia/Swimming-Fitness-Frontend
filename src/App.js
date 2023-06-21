import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './components/Contact/contact';
import Home from './components/home_page/home';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import FirstPage from './components/Dashboard/FirstPage/FirstPage';
import SecondPage from './components/Dashboard/SecondPage/SecondPage';
import ThirdPage from './components/Dashboard/ThirdPage/ThirdPage';
import Resources from './components/Resources/Resources';

function App() {
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token; // Check if token exists

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resources" element={<Resources />} />
        <Route
          path="/profile"
          element={isLoggedIn ? <FirstPage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <SecondPage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/challenges"
          element={isLoggedIn ? <ThirdPage /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;