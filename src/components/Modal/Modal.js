import "./Modal.scss";
import React, { useRef } from "react";
import convertDate from "../../helpers/convertDate";

/**
 /**
 * @param dataForModal
 * @param dataForModal.attributes.publications.map
 * @param dataForModal.attributes.employmentTypes
 * @param dataForModal.attributes.workingTimes
 * @param dataForModal.attributes.previewText
 * @param dataForModal.attributes.publications.createTime
 * @param setIsShowModal
 * @param dataForModal.attributes.logo
 *
 */

const Modal = ({ dataForModal, setIsShowModal }) => {
  const openModalHandler = () => {
    closeModal();
  };

  const handleClickOutside = (event) => {
    const target = event.target;
    const current = refContainer.current;

    if (!current || current.contains(target)) {
      return;
    }

    closeModal();
  };

  const closeModal = () => {
    document.body.style.overflow = "unset";
    setIsShowModal(false);
  };

  const { company } = dataForModal.attributes;
  const refContainer = useRef();

  return (
    <div
      className="modal-overlay"
      onClick={handleClickOutside}
      data-test="modal"
    >
      <div className="modal-window" ref={refContainer}>
        <div className="results">
          <div className="company-header">
            <div className="company-details">
              <div className="company-logo">
                {company.logo ? (
                  <img src={company.logo} alt={company.name} />
                ) : (
                  company.name
                )}
              </div>
              <h2>{company.name}</h2>
            </div>
            <div className="job-details">
              <div className="type-of-job">
                <span className="title-of-job-details">Type of job:</span>
                {dataForModal.attributes.employmentTypes.map((item) => (
                  <span key={item.id}>{item.title}</span>
                ))}
              </div>
              <div className="created-tome">
                <span className="title-of-job-details">Created date:</span>

                {dataForModal.attributes.publications.map((publication) => (
                  <span key={publication.id}>
                    {convertDate(`${publication.createTime}`)}
                  </span>
                ))}
              </div>
              <div className="working-time">
                <span className="title-of-job-details">Working time:</span>
                {dataForModal.attributes.workingTimes.map((workingTime) => (
                  <span key={workingTime.id}>{workingTime.title}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="preview-text">
            {dataForModal.attributes.previewText}
          </div>
        </div>
        <div className="close" onClick={openModalHandler} />
      </div>
    </div>
  );
};

export default Modal;
