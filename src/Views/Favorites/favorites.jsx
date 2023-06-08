import {connect} from 'react-redux'
import Cards from '../../components/Cards/Cards'
import { NavLink } from 'react-router-dom';
import { filterCards,orderCards } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Favorites({myFavorites}){
    const dispatch = useDispatch();
    
    const [aux , setAux] = useState(false)
    const handleOrder = (e)=>{
        dispatch(orderCards(e.target.value));
        setAux(true);
    }

    const handleFilter = (e)=>{
        dispatch(filterCards(e.target.value))
    }
    return(
        <div>
            <h1>TUS FAVORITOS</h1>
            <select onChange={handleOrder}>
                <option value='Ascendente'>Ascendente</option>
                <option value='Descendente'>Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>Unknown</option>
            </select>
            <NavLink to={'/home'}><button>Back</button></NavLink>
            <Cards characters={myFavorites}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps,null)(Favorites)