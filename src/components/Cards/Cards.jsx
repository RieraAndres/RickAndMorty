import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const {characters, onClose} = props
   return (
   <div className= {styles.divCards}>
      {characters.map((character)=>(
         <Card 
          key={character.id}
          onClose = {onClose}
          character={character}
          />
      ))}
   </div>
   );
}


