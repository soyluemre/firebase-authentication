import React from "react";
import "../css/pagination.css";

const Pagination = ({ totalPages, page, setPage, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div>
      <ul className="pagination pagination-div">
        <li className={page === 1 ? `page-item disabled` : `page-item`}>
          <p
            className="page-link"
            onClick={() => setPage((prev) => (prev === 1 ? prev : prev - 1))}
          >
            Previous
          </p>
        </li>

        {pages.map((num, index) => {
          return (
            <li onClick={() => handleClick(num)} key={index}>
              <p
                className={
                  page === num ? "page-link pagination-active" : "page-link"
                }
              >
                {num}
              </p>
            </li>
          );
        })}

        <li
          className={page === pages.length ? "page-item disabled" : "page-item"}
        >
          <p
            className="page-link"
            onClick={() =>
              setPage((prev) => (prev === pages.length ? prev : prev + 1))
            }
          >
            Next
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
