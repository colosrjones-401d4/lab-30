import React from "react";
import Form from "../index";
import "../../../../setupTest";

describe("<Form /> component", () => {
  it("renders as expected", () => {
    const app = global.shallow(<Form />);

    expect(app.find("#methods").exists()).toBeTruthy();
  });
});