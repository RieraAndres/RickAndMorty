import SearchBar from '../SearchBar/SearchBar'
import {NavLink} from "react-router-dom";
import styles from './Nav.module.css'

export default function Nav (props){
  const  {onSearch} = props;
    return(
        <nav className={styles.Nav}>
            <div className={styles.NavLinkDiv}>
                <NavLink to={'/about'} className={styles.NavLink} ><button>About</button></NavLink>
                <NavLink to={'/home'} className={styles.NavLink} ><button>Home</button></NavLink>     
                <NavLink to={'/favorites'} className={styles.NavLink} ><button>Favorites</button></NavLink>
            </div> 
            <SearchBar onSearch = {onSearch}></SearchBar>
        </nav>
    )
}