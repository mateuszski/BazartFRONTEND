import { Routes, Route } from "react-router-dom";
import HomePage from "../../Features/Home/homePage";
import { useEffect, useState } from "react";
import "./App.css";
import ArtistSite from "../../Features/ArtistSite/artistSite";
import EventPage from "../../Features/EventSite/eventPage";

const App = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5120/api/categories")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage categories={categories} />} />
      <Route path="/event/:eventId" element={<EventPage />}></Route>
      <Route path="/user/:userId" element={<ArtistSite />}></Route>
      <Route path="/login" element={<Registration />}></Route>
      <Route path="/login/login" element={<LoginForm />}></Route>
      <Route path="/login/register" element={<RegistrationForm />}></Route>
    </Routes>
  );
};

export default App;