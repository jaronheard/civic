import React from "react";
import { mount } from "enzyme";
import Dialog from "./Dialog";

describe("Dialog", () => {
  it("should render empty Dialog", () => {
    const wrapper = mount(<Dialog />);
    expect(wrapper.find("Dialog")).to.have.length(1);
    expect(wrapper.find("Dialog").children()).to.have.length(0);
  });
  it("should render Dialog with children", () => {
    const wrapper = mount(
      <Dialog>
        <h1>Something in the dialog</h1>
      </Dialog>
    );
    expect(wrapper.find("Dialog")).to.have.length(1);
    expect(wrapper.find("Dialog").children()).to.have.length(1);
  });
});
