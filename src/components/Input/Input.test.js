import Enzyme, { shallow } from "enzyme";
import React from "react";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Input from "./Input";
Enzyme.configure({ adapter: new EnzymeAdapter() });
const setup = () => shallow(<Input dataTest="input-text" />);
const findByTestAttribute = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

test("renders form component without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, "input-text");
  expect(appComponent.length).toBe(1);
});
