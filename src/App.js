import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/contact';
import Home from './components/home_page/home';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import Profile from './components/Dashboard/FirstPage/FirstPage';
import Dashboard from './components/Dashboard/SecondPage/SecondPage';
import Challenges from './components/Dashboard/ThirdPage/ThirdPage';
import Resources from './components/Resources/Resources';

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/challenges" element={<Challenges/>} />
        <Route exact path="/resources" element={<Resources/>} />
      </Routes>
    </Router>
  );
};

export default App;
