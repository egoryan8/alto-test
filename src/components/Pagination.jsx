import React, { useState } from 'react';

const Pagination = ({ productsPerPage, totalCount, handlePaginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [portionNumber, setPortionNumber] = useState(1);
  const portionSize = 4;
  const pageNumbers = [];
  const pagesCount = Math.ceil(totalCount / productsPerPage);
  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;

  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  const onClickPaginate = (pageNumber) => {
    handlePaginate(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pagination__wrapper">
      <button
        className="pagination__button"
        disabled={portionNumber === 1}
        onClick={() => setPortionNumber(portionNumber - 1)}>
        Назад
      </button>
      <ul className="pagination">
        {portionNumber > 1 && <span className="pagination__not-interactive">...</span>}
        {pageNumbers
          .filter((page) => page >= leftPortionNumber && page <= rightPortionNumber)
          .map((number) => (
            <li
              className={
                currentPage === number
                  ? 'pagination__item pagination__item_selected'
                  : 'pagination__item'
              }
              key={number}
              onClick={() => onClickPaginate(number)}>
              {number}
            </li>
          ))}
        {portionCount > portionNumber && <span className="pagination__not-interactive">...</span>}
      </ul>
      <button
        className="pagination__button"
        disabled={portionCount <= portionNumber}
        onClick={() => setPortionNumber(portionNumber + 1)}>
        Вперёд
      </button>
    </div>
  );
};

export default Pagination;
