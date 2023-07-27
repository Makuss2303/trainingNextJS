import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <>
      <nav className="pagination_bar">
        <div id="pag-cover">
          {_page > 1 && (
            <a
              className="pagination_bar__first__last page-numbers"
              onClick={() => handlePageChange(1)}
            >
              <i className="fa-solid fa-angles-left"></i>
            </a>
          )}
          {_page > 1 && (
            <a
              className="next page-numbers"
              onClick={() => handlePageChange(_page - 1)}
            >
              <div className="td arr-cover">
                <div className="arrow" id="r-arrow">
                  <i className="fas fa-chevron-circle-left"></i>
                </div>
              </div>
            </a>
          )}

          {Array.from({ length: pagination._totalRows }, (_, i) => i + 1).map(
            (item) => {
              if (_page === item) {
                return (
                  <span
                    aria-current="page"
                    className="page-numbers current"
                    onClick={() => handlePageChange(item)}
                    key={item}
                  >
                    {item}
                  </span>
                );
              } else {
                return (
                  <a
                    className="page-numbers"
                    onClick={() => handlePageChange(item)}
                    key={item}
                  >
                    {item}
                  </a>
                );
              }
            }
          )}
          {_page < _totalRows && (
            <a
              className="next page-numbers"
              onClick={() => handlePageChange(_page + 1)}
            >
              <div className="td arr-cover">
                <div className="arrow" id="r-arrow">
                  <i className="fas fa-chevron-circle-right"></i>
                </div>
              </div>
            </a>
          )}
          {_page !== _totalRows && (
            <a
              className="pagination_bar__first__last page-numbers"
              onClick={() => handlePageChange(_totalRows)}
            >
              <i className="fa-solid fa-angles-right"></i>
            </a>
          )}
        </div>
      </nav>
      
    </>
  );
}

export default Pagination;
