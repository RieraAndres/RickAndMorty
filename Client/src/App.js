import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "./Views/About/About";
import Detail from "./Views/Detail/Detail";
import Form from "./Views/Form/Form";
import Favorites from "./Views/Favorites/favorites";
import ErrorPage from "./Views/Error/error";

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterIds, setCharacterIds] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "andresriera9999@gmail.com";
  const PASSWORD = "123456";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/login");
  }, [access]);

  const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characterIds.includes(data.id)) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
          setCharacterIds((oldCharacterIds) => [...oldCharacterIds, data.id]);
        } else {
          window.alert("¡No hay personajes con este ID o ya ha sido agregado!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onClose = (id) => {
    const newCharacters = characters.filter((character) => character.id !== id);
    const newCharacterIds = characterIds.filter(
      (characterId) => characterId !== id
    );
    setCharacters(newCharacters);
    setCharacterIds(newCharacterIds);
  };

  return (
    <div className="App">
      <h1 className="Titulo">RICK AND MORTY</h1>
      <Routes>
        <Route path="/login" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <div>
              <Nav onSearch={onSearch}></Nav>
              <Cards characters={characters} onClose={onClose} />
            </div>
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
