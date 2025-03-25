import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "./index.css";
import LoginPage from "./StartPages/LoginPage.js";
import SignUp from "./StartPages/SignUp.jsx";
import Interviewsystem from "./StartPages/InterviewSystem.jsx";
import WelcomePage from "./StartPages/WelcomePage.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
        />

        {/* Sign Up Page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Welcome Page */}
        <Route
          path="/main"
          element={
            //isLoggedIn ? <WelcomePage /> : <Navigate to="/" />
            <LoginPage onLogin={() => setIsLoggedIn(true)} />
          }
        />

        {/* Interview System */}
        <Route
          path="/interviewsystem"
          element={isLoggedIn ? <Interviewsystem /> : <Navigate to="/" />}
        />

        {/* Welcome Page */}
<Route
  path="/welcome"
  element={
    //isLoggedIn ? <WelcomePage /> : <Navigate to="/" />
    <LoginPage onLogin={() => setIsLoggedIn(true)} />
    }
/>

      </Routes>
    </Router>
  );
}

export default App;
