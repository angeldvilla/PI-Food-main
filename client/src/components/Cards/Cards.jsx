/* ------------------------------------------ */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './cardstyle.module.css';
/* ------------------------------------------ */

const Cards = ({ recipesToShow }) => {

   return (
      <div className={styles.container}>
         {
         recipesToShow.map(({id, image, title, diets}) => {
            return (
               <div className={styles.card} key={id}>
                  
                  <NavLink to={`/detail/${id}`} className={styles.link}>
                  
                  <img src={image} alt={title} />
                  
                  <br/>
                  
                  <h3 className={styles.name}> {title} </h3>
            
                  <h3>Dietas:
                  {
                  diets.length > 0 
                  ? (
                     diets?.map((diet, index) => (
                        <p key={index} className={styles.diets}> {diet} </p>
                     ))
                     
                     ) 
                  : ( 
                     <p className={styles.diets}> Diets not found </p>
                    )
                  }
                  </h3>
                  </NavLink>

               </div>
             )})
         }
      </div>
   );
};
/* ------------------------------------------------------------- */ 

export default Cards;
/* ------------------------------------------------------------- */ 