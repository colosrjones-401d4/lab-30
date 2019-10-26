import React from "react";
import Footer from "../index";
import "../../../../setupTest";

describe("<Footer /> component", () => {
  it("renders as expected", () => {
    const app = global.shallow(<Footer />);

    expect(app.find("footer").exists()).toBeTruthy();
  });
});