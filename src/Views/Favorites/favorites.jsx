import {connect} from 'react-redux'
import Cards from '../../components/Cards/Cards'
import { NavLink } from 'react-router-dom';
function Favorites({myFavorites}){
    return(
        <div>
            <h1>TUS FAVORITOS</h1>
            <NavLink to={'/home'}><button>Back</button></NavLink>
            <Cards characters={myFavorites}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps,null)(Favorites)