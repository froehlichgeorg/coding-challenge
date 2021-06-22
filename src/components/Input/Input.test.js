import Enzyme, { shallow } from "enzyme";
import React from "react";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Input from "./Input";
Enzyme.configure({ adapter: new EnzymeAdapter() });
const setup = (item) => shallow(<Input dataTest={item} />);
const findByTestAttribute = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

test.each(["input-text", "input-submit"].map((formItem) => [formItem]))(
  "renders form component without crashing",
  (formItem) => {
    const wrapper = setup(formItem);
    const appComponent = findByTestAttribute(wrapper, formItem);
    expect(appComponent.length).toBe(1);
  }
);
