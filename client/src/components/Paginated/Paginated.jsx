/* COMPONENTS */
import style from "./paginaStyle.module.css";
/* ----------------- */

/* HOOKS */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

/* ACTIONS */
import { pagination } from "../../redux/actions/actionsPagination";
/* ----------------- */

const Paginated = ({ totalPages }) => {
  const dispatch = useDispatch();

  const { pageActual } = useSelector((state) => state.pagination);

  const handleChangePage = (pageNumber) => {
    if (pageActual >= 1 && pageActual <= totalPages)
      dispatch(pagination(pageNumber));
  };

  const numbersPage = () => {
    const arrNumbers = [];
    const visiblePageCount = 5;
    const startPage = Math.max(
      1,
      pageActual - Math.floor(visiblePageCount / 2)
    );
    const endPage = Math.min(totalPages, startPage + visiblePageCount - 1);

    for (let page = startPage; page <= endPage; page++) {
      const isActive = pageActual === page ? "active" : "";
      arrNumbers.push(
        <button
          key={page}
          onClick={() => {
            handleChangePage(page);
          }}
          className={isActive ? style.selectedPage : style.paginatedButton} //Estilos para el boton seleccionado
        >
          {page}
        </button>
      );
    }
    return arrNumbers;
  };

  /* ------------------------------------------------------------- */

  return (
    <div className={style.container}>
      <div className={style.buttonContainer}>
        <button
          onClick={() => handleChangePage(pageActual - 1)}
          disabled={pageActual <= 1}
        >
          <svg
            fill="#6f6f6ff6"
            width="3em"
            height="5em"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 14.9335 27.9414 C 14.9335 27.3789 15.1210 26.9102 15.6601 26.3711 L 24.6366 17.3945 C 25.0117 17.0430 25.4804 16.8555 26.0429 16.8555 C 27.1444 16.8555 28.0117 17.6992 28.0117 18.8008 C 28.0117 19.3633 27.7304 19.8789 27.4023 20.2071 L 24.0976 23.4883 L 20.9101 26.1602 L 26.5585 25.9258 L 40.2929 25.9258 C 41.4648 25.9258 42.2617 26.7696 42.2851 27.9414 C 42.2851 29.1133 41.4882 29.9571 40.2929 29.9571 L 26.5585 29.9571 L 20.9101 29.7461 L 24.0976 32.4414 L 27.4023 35.6758 C 27.7539 36.0274 28.0117 36.5196 28.0117 37.1055 C 28.0117 38.2071 27.1444 39.0508 26.0429 39.0508 C 25.4804 39.0508 25.0117 38.8164 24.6366 38.4883 L 15.6601 29.5352 C 15.1444 29.0196 14.9335 28.5508 14.9335 27.9414 Z" />
          </svg>
        </button>

        <div className={style.paginatedContainer}>
          <span>{numbersPage()}</span>
        </div>

        <button
          onClick={() => handleChangePage(pageActual + 1)}
          disabled={pageActual >= totalPages}
        >
          <svg
            fill="#000000"
            width="3em"
            height="3em"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 42.2851 27.9414 C 42.2851 28.5508 42.0507 29.0196 41.5351 29.5352 L 32.5585 38.4883 C 32.2070 38.8164 31.7382 39.0508 31.1757 39.0508 C 30.0742 39.0508 29.2070 38.2071 29.2070 37.1055 C 29.2070 36.5196 29.4648 36.0274 29.8163 35.6758 L 33.1210 32.4414 L 36.3085 29.7461 L 30.6601 29.9571 L 16.9257 29.9571 C 15.7304 29.9571 14.9335 29.1133 14.9335 27.9414 C 14.9335 26.7696 15.7304 25.9258 16.9257 25.9258 L 30.6601 25.9258 L 36.2851 26.1602 L 33.1210 23.4883 L 29.8163 20.2071 C 29.4882 19.8789 29.2070 19.3633 29.2070 18.8008 C 29.2070 17.6992 30.0742 16.8555 31.1757 16.8555 C 31.7382 16.8555 32.2070 17.0430 32.5585 17.3945 L 41.5351 26.3711 C 42.0742 26.9102 42.2851 27.3789 42.2851 27.9414 Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
/* ------------------------------------------------------------- */

export default Paginated;
/* ------------------------------------------------------------- */
