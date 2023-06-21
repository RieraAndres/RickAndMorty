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
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterIds, setCharacterIds] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const response = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const data = response.data;
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/login");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const data = response.data;
      if (data.name && !characterIds.includes(data.id)) {
        setCharacters((oldCharacters) => [...oldCharacters, data]);
        setCharacterIds((oldCharacterIds) => [...oldCharacterIds, data.id]);
      } else {
        window.alert("¡No hay personajes con este ID o ya ha sido agregado!");
      }
    } catch (error) {
      console.log(error.message);
    }
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
