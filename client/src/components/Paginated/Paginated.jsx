import React, { useState } from "react";
import style from 'paginaStyle.module.css';
/* --------------------------------------- */

const Paginated = ({page, setPage, maxPage}) => {
   
   const[valuePage, setValuePage] = useState(1);

    const prevPage = () => {
        setValuePage(valuePage - 1)
    }

    const nextPage = () => {
        setValuePage(valuePage + 1)
        setPage(page + 1)
    }

    const onChange = (event) => {
        setValuePage(event.target.value)
    }

    return(
    <div className={style.container}>
        <button onClick={prevPage} disabled={page === 1 || page < 1}>PREV</button>
        <p onChange={(event) => onChange(event)}>{valuePage}</p>
        <p>de {maxPage}</p>
        <button onClick={nextPage} disabled={page === maxPage || page > maxPage}>NEXT</button>
    </div>
   );
    
}

export default Paginated;