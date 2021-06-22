import "./SearchItem.scss";
import React, { useState } from "react";

/**
 /**
 * @param value
 * @param value.attributes.company
 * @param value.attributes.location
 * @param setDataForModal
 * @param setIsShowModal
 */

const SearchItem = ({ value, setDataForModal, setIsShowModal }) => {
  const { title, relativeDetailUrl } = value.attributes;
  const [itemValue] = useState(value);
  const { logo, name } = value.attributes.company;
  const { city } = value.attributes.location;

  const detailsHandler = () => {
    setDataForModal(itemValue);
    setIsShowModal(true);

    document.body.style.overflow = "hidden";
  };

  return (
    <div
      className="search-item"
      data-link={relativeDetailUrl}
      onClick={detailsHandler}
    >
      <div className="item-logo">
        {logo ? <img src={logo} alt={name} /> : <span>{name}</span>}
      </div>
      <div className="item-title">{title}</div>
      <div className="item-city">{city}</div>
    </div>
  );
};

export default SearchItem;
