import styles from './SearchBar.module.css'
import { useState } from 'react';


export default function SearchBar(props) {
   const {onSearch} = props;
   const [id, setId] = useState("");
   
   const handleChange = (event) => {
      setId(event.target.value);
    };

    const handleSearch = () => {
      onSearch(id);
      setId('')
    };
  
    const handleRandomSearch = ()=>{
      const generatedNumbers = new Set();
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 826) + 1;
  } while (generatedNumbers.has(randomNumber));

  generatedNumbers.add(randomNumber);
      onSearch(randomNumber)
      setId('')
    }

   

   return (
      <div className={styles.divSearchBar}>
          <input type='search' placeholder="Busca tu personaje" className={styles.SearchBar} value={id} onChange={handleChange} />
         <button onClick={handleSearch} className={styles.SearchBarButton} >Buscar</button> 
         <button onClick={handleRandomSearch}>Aleatorio</button>
      </div>
   );
}
