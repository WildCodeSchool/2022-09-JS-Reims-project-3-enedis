import { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./components/NavBar.css";
import Signup from "./components/Signup/Signup";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Menu from "./components/Menu";

import Login from "./components/Login/Login";
import { UserContext } from "./store/user-context";
import Profile from "./components/Profile/Profile";

import "./App.css";

function App() {
  const { token } = useContext(UserContext);

  const [isActive, setIsActive] = useState(false);
  const switchPage = () => {
    setIsActive(true);
  };
  const resForm = () => {
    setIsActive(false);
  };

  const login = (
    <div className="log-page">
      <Login />
      <button onClick={switchPage} type="button">
        Premiere fois? Creet votre compte!
      </button>
    </div>
  );
  const content = (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profil" element={<Profile />} />
      </Routes>

      <NavBar />
    </>
  );

  return (
    <>
      {!token && !isActive && login}
      {!token && isActive && <Signup onRes={resForm} />}
      {token && content}
    </>
  );
}

export default App;
