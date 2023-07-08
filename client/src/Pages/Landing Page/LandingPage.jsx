import styles from './landingpage.module.css';
import FoodBackground from '../../videos/FoodBackground.mp4';
import { NavLink } from 'react-router-dom';

const landingPage = () => {
    return (
     <div className={styles.landingpage} >
         <video className={styles.videobackground} autoPlay loop muted>
             <source src={FoodBackground} type="video/mp4" />
         </video>

        <div className={styles.titles}>
         <h1>Welcome To PI Foods</h1>
         {/* <button>Home</button> */}
           <NavLink to='/home' className={styles.button}>Home</NavLink>
        </div>
         
         
     </div>
    );
 };


export default landingPage;