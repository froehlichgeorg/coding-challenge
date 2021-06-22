import Enzyme, { shallow } from "enzyme";
import React from "react";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Loading from "./Loading";
Enzyme.configure({ adapter: new EnzymeAdapter() });
const setup = () => shallow(<Loading />);
const findByTestAttribute = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

test("renders loading component without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, "loading");
  expect(appComponent.length).toBe(1);
});
