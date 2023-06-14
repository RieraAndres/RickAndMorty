import { useParams,NavLink } from "react-router-dom";
import { useState, useEffect} from "react";
import styles from './Detail.module.css'


function Detail() {
  const {id} = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
       .then(response => response.json())
       .then(data => {
          if (data.name) {
             setCharacter(data);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch(error => {
          console.error('Error:', error);
       });
 
    return () => {
       setCharacter({});
    };
 }, [id]);


    return (
      <div className={styles.DivDetail}>
      {character.name && (
        <div className={styles.DetailCard}>
          <div>
          <NavLink to={'/home'}  ><button>Back</button></NavLink>
            <img src={character.image} alt={character.name} />
         </div>
          <div>
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin && character.origin.name}</p>
         </div>
        </div>
      )}
    </div>
    );
  }
  
  export default Detail;