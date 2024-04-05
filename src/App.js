import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Applicant from "./components/Applicant";

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/applicant" element={<Applicant/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
