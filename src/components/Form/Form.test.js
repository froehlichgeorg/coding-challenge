import Enzyme, { shallow } from "enzyme";
import React from "react";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Form from "./Form";
Enzyme.configure({ adapter: new EnzymeAdapter() });
const setup = () => shallow(<Form />);
const findByTestAttribute = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

test("renders form component without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, "component-form");
  expect(appComponent.length).toBe(1);
});
