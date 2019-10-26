import React from "react";
import Json from "../index";
import "../../../../setupTest";

describe("<Json /> component", () => {
  it("renders as expected", () => {
    const app = global.shallow(<Json />);

    expect(app.find("#json").exists()).toBeTruthy();
  });
});