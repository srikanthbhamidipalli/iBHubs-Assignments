import React from "react";
import { mount, shallow } from "enzyme";

import Sample from "./Sample";
import appStore from "../../../../AppStore";

describe("<Sample/>", () => {
  it("Sample CallBack Test", () => {
    let callBack = jest.fn();
    const wrapper = shallow(<Sample showMessage={callBack} />);
    wrapper.find("div").simulate("click");
    expect(callBack).toHaveBeenCalled();
  });
});
