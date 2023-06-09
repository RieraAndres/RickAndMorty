import styles from './Card.module.css'
import {Link} from 'react-router-dom';
import {addFavorite,removeFavorite } from '../../Redux/actions';
import {useState} from 'react';
import {connect} from 'react-redux';
import { useEffect } from 'react';


function Card(props) {
  const {onClose,removeFavorite,addFavorite, myFavorites,character} = props; 
  const [isFav,setIsFav]=useState(false)
 
  useEffect(() => {
    myFavorites.forEach((isFav) => {
      if (isFav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  


  function handleFavorite(character){
    if (!isFav) {
      addFavorite(character);
      setIsFav(true);
    } else {
      removeFavorite(character);
      setIsFav(false);
    }
  }

  const handleOnClose = () => {
    onClose(character.id);
    if (isFav) {
      removeFavorite(character.id);
    }
  }
  
  
  return (
    <div className={styles.divCard} >
      {isFav ? (
  <button className={styles.corazon} onClick={() => handleFavorite(character.id)}>❤️</button>
) : (
  <button className={styles.corazon}onClick={() => handleFavorite(character)}>🤍</button>
)}    
      {window.location.pathname === '/home' &&  
      <button className = {styles.Xbutton} onClick={handleOnClose} >✖</button> }
      <img src={character.image} alt="" />
      <h2>{character.name}</h2>
      <Link  to={`/detail/${character.id}`} ><button className={styles.DetailButton}>Detalles</button></Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id))
  };
};
const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites}
};

export default connect(mapStateToProps,mapDispatchToProps)(Card)