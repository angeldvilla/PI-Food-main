/* COMPONENT */
import SearchBar from '../SearchBar/SearchBar';
import navStyle from './navStyle.module.css';
/* --------- */

/* HOOKS */
import { NavLink } from "react-router-dom";
/* --------- */


const NavBar = ({ searchRecipe }) => {
   return ( 
    <nav className={navStyle.nav}>
        
        <div className={navStyle.landingImage}>
            
            <NavLink to='/' > 
            <img src='https://img.freepik.com/vector-gratis/fondo-comida-saludable_23-2148168636.jpg' alt="Foods" />
            </NavLink>

        </div>

        <div className={navStyle.links}>
          
          <NavLink to='/home' className={({isActive}) => isActive ? navStyle.active : navStyle.home}>
            <img src="https://www.freepnglogos.com/uploads/logo-home-png/home-logo-images-black-5.png" alt="Home Icon"
            style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '1.6em' }}/>
      
              HOME
            </NavLink>
          

          <NavLink to='/createRecipe' className={({isActive}) => isActive ? navStyle.activeRecipe : navStyle.Createrecipes}>
            <img src="https://w7.pngwing.com/pngs/124/142/png-transparent-pencil-edit-office-create-compose-edit-file-writing-creative-office-icon-thumbnail.png" alt="Favorites Icon"
           style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '1.3em' }} />
            
            CREATE RECIPE
          </NavLink>
          
           <SearchBar searchRecipe={searchRecipe}/> 

          </div>

    </nav>
   );
}

export default NavBar;