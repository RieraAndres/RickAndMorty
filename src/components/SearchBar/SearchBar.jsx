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

   return (
      <div className={styles.divSearchBar}>
          <input type='search' placeholder="Busca tu personaje" className={styles.SearchBar} value={id} onChange={handleChange} />
         <button onClick={handleSearch} className={styles.SearchBarButton} >Buscar</button> 
      </div>
   );
}
