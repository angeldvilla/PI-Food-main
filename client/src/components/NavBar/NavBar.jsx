/* COMPONENTS */
import SearchBar from '../SearchBar/SearchBar';
import navStyle from './navStyle.module.css';
import logoFoods from '../../images/logoFoods.png';
/* --------- */

/* HOOKS */
import React from 'react';
import { NavLink } from "react-router-dom";
/* --------- */

const NavBar = () => {

   return ( 
    <nav className={navStyle.nav}>
        
        <div className={navStyle.landingImage}>
          <NavLink to='/' > 
            <img src={logoFoods} alt="Foods" /> 
          </NavLink>
        </div>

        <div className={navStyle.links}>
          
          <NavLink to='/home' className={({isActive}) => isActive ? navStyle.active : navStyle.home}>

           <svg width="3.2em" height="1.2em" marginright='0.2em' marginleft='1.6em' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_14_1976)">
          <path d="M25.926 53.1V47.175C25.926 45.564 26.5659 44.0189 27.705 42.8797C28.844 41.7404 30.389 41.1003 32 41.1V41.1C32.7977 41.1 33.5876 41.2571 34.3246 41.5625C35.0616 41.8678 35.7313 42.3153 36.2953 42.8794C36.8593 43.4435 37.3067 44.1132 37.6119 44.8503C37.9171 45.5873 38.0741 46.3773 38.074 47.175V53.1" stroke="#426AB2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.8 26.551V48.6C12.8 49.7935 13.2741 50.9381 14.118 51.782C14.9619 52.6259 16.1065 53.1 17.3 53.1H46.7C47.8935 53.1 49.0381 52.6259 49.882 51.782C50.7259 50.9381 51.2 49.7935 51.2 48.6V26.551C51.2 25.8524 51.0373 25.1634 50.7249 24.5385C50.4125 23.9137 49.9589 23.3702 49.4 22.951L34.7 11.926C33.9211 11.3418 32.9737 11.026 32 11.026C31.0263 11.026 30.0789 11.3418 29.3 11.926L14.6 22.951C14.0411 23.3702 13.5875 23.9137 13.2751 24.5385C12.9626 25.1634 12.8 25.8524 12.8 26.551V26.551Z" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.201 19.501L8 28.196" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M46.399 20.701L55.999 27.901" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 28.194L29.28 11.927C30.0625 11.329 31.0191 11.0033 32.004 10.9995C32.9888 10.9958 33.9479 11.3141 34.735 11.906L56 27.9" stroke="#426AB2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_14_1976">
          <rect width="51.999" height="46.1" fill="white" transform="translate(6 9)"/>
          </clipPath>
          </defs>
          </svg>

              HOME
            </NavLink>
            
          <SearchBar />

          <NavLink to='/createRecipe' className={({isActive}) => isActive ? navStyle.activeRecipe : navStyle.Createrecipes}>

            <svg fill="#000000" width="3.2em" height="1.2em" marginright='0.2em' marginleft='1.6em' viewBox="0 0 24 24" id="create-note-alt" xmlns="http://www.w3.org/2000/svg" className="icon multi-color">
            <path id="secondary-fill" d="M17.44,8.22A5.49,5.49,0,0,1,14,9.91c0-.47-.26-4,1.5-6.1L16,4l.19-.72L18,4l.47-1.82.5-.09C19,2.57,19.23,6.18,17.44,8.22" style={{ fill: 'rgb(44, 169, 188)', strokeWidth: 2 }}></path>
            <path id="secondary-stroke" d="M12,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V12" style={{ fill: 'none', stroke: 'rgb(44, 169, 188)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></path>
            <path id="primary-stroke" d="M19.44,8.22C17.53,10.41,14,10,14,10s-.39-4,1.53-6.18a3.49,3.49,0,0,1,.56-.53L18,4l.47-1.82A8.19,8.19,0,0,1,21,2S21.36,6,19.44,8.22ZM14,10l-2,2" style={{ fill: 'none', stroke: 'rgb(0, 0, 0)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></path>
          </svg>

            CREATE RECIPE
          </NavLink>
          
           {/* <SearchBar searchRecipe={searchRecipe}/> */} 

        </div>

    </nav>
   );
}
/* ------------------------------------------------------------- */ 

export default NavBar;
/* ------------------------------------------------------------- */ 