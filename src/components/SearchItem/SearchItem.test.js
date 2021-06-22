import SearchItem from "./SearchItem";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import value from "./dataFromSearchItem";
Enzyme.configure({ adapter: new EnzymeAdapter() });
const setup = () => shallow(<SearchItem value={value} />);
const findByTestAttribute = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

test("renders Search Item component given the props", () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, "search-item");
  expect(appComponent.length).toBe(1);
});
