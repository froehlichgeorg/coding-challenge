import "./App.css";
import useFetch from "../../helpers/useFetch";
import Input from "../Input/Input";
import Form from "../Form/Form";
import ComponentWrapper from "../../helpers/ComponentWrapper";
import { useRef, useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import React from "react";

function App() {
  const [search, setSearch] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const [dataForModal, setDataForModal] = useState({});

  const { data, isLoading, error } = useFetch(
    `https://api.joblocal.de/v4/search-jobs?search.query=${search}`,
    {}
  );

  const inputRef = useRef();

  const formHandler = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;

    setSearch(searchValue);
    inputRef.current.clearInputValue();
  };

  const paginationMove = (link) => {
    setSearch(link);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="App" data-test="component-app">
        <Form formHandler={formHandler}>
          <ComponentWrapper classNames="form-row">
            <Input
              typeOfInput={"text"}
              name={"search"}
              value={"Search query"}
              ref={inputRef}
              dataTest="input-text"
            />
            <Input
              typeOfInput={"submit"}
              name={"Search"}
              value={"Search"}
              dataTest="input-submit"
            />
          </ComponentWrapper>
        </Form>
        <SearchResults
          data={data}
          isLoading={isLoading}
          error={error}
          paginationMove={paginationMove}
          setIsShowModal={setIsShowModal}
          setDataForModal={setDataForModal}
        />
      </div>
      {isShowModal && (
        <Modal setIsShowModal={setIsShowModal} dataForModal={dataForModal} />
      )}
    </>
  );
}

export default App;
