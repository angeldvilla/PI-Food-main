/* ------------------------------------------ */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './cardstyle.module.css';
/* ------------------------------------------ */

const Cards = ({ recipesToShow }) => {

   return (
      <div className={styles.container}>
         {
         recipesToShow.map(({id, image, title, diets, healthScore}) => {
            return (
               <div className={styles.card} key={id}>
                  
                  <NavLink to={`/detail/${id}`} className={styles.link}>
                  
                  <img src={image} alt={title} />
                  
                  <h3 className={styles.name}> {title} </h3>

                  <h3>Health Score : {healthScore}</h3>
            
                  <h3>Dietas:</h3>
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