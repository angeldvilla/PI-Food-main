/* ------------------------------------------ */
import React from 'react';
import styles from './cardstyle.module.css'
import { Link } from 'react-router-dom';
/* ------------------------------------------ */

const Cards = ({ allRecipes }) => {
   return (
      <div className={styles.container}>
      {
         allRecipes.map(({id, image, title, diets}) => {
            return (
               <div className={styles.card} key={id}>
               <Link to={`/detail/${id}`} className={styles.link}>
               <img src={image} alt={title} />
               <br/>
               <h3 className={styles.name}>{title}</h3>
               {/* <h3 className={styles.diets}>{diets}</h3> */}
               <h3>
               {
                diets?.map((diet, index) => (
                  <p key={index} className={styles.diets}>
                    {diet}
                  </p>

                ))
                }
               </h3>
            </Link>
            </div>
         )})
      }
      </div>
   );
}


export default Cards;