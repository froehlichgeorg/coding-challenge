import "./SearchResults.scss";
import React from "react";
import Loading from "../Loading/Loading";
import SearchItem from "../SearchItem/SearchItem";

const SearchResults = ({
  data,
  paginationMove,
  setDataForModal,
  setIsShowModal,
}) => {
  const paginationHandler = (event) => {
    event.preventDefault();

    const link = event.target.dataset.link.split(
      "https://api.joblocal.de/v4/search-jobs?search.query="
    );

    paginationMove(link[1]);
  };

  return (
    <div className="search-results">
      {data === null ? (
        <Loading />
      ) : (
        <>
          <div className="table-header">
            <div className="logo">&nbsp;</div>
            <div className="logo">Name of company</div>
            <div className="logo">City</div>
          </div>
          {data.included &&
            data.included.map((searchItem, key) => (
              <SearchItem
                value={searchItem}
                key={`${key}${data.id}`}
                setDataForModal={setDataForModal}
                setIsShowModal={setIsShowModal}
              />
            ))}
          <div className="pagination">
            {data.links.prev && (
              <div
                onClick={paginationHandler}
                data-link={data.links.next}
                className="pagination"
              >
                Previous
              </div>
            )}
            <div
              onClick={paginationHandler}
              data-link={data.links.next}
              className="pagination"
            >
              Next
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
