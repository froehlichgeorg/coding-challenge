import Modal from "./Modal";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import dataForModal from "./dataForModal";
Enzyme.configure({ adapter: new EnzymeAdapter() });
const setup = () => shallow(<Modal dataForModal={dataForModal} />);
const findByTestAttribute = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

test("renders Modal component given the props", () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, "modal");
  expect(appComponent.length).toBe(1);

  // const container = shallow(<Modal />);
  // const overlay = container.find(".modal-overlay");
  // expect(overlay).toHaveLength(1);
  // const modal = overlay.find(".modal");
  // expect(overlay).toHaveLength(1);
  // expect(modal.text()).toEqual("Hello World");
});
