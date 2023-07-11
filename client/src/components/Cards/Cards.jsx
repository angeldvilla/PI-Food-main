/* ------------------------------------------ */
import styles from './cardstyle.module.css'
import { Link } from 'react-router-dom';
/* ------------------------------------------ */

const Cards = ({id, title, image, diet}) => 
{
   console.log(diet);
   return (
      <Link to={`/detail/${id}`} className={styles.link} >
      
      <div className={styles.card}>

         <img src={image} alt={title} />
         <br/>
         <h3 className={styles.name}>{title}</h3>
         <h5 className={styles.diets}>{diet}</h5>

      </div> 

      </Link>
   );
}


export default Cards;