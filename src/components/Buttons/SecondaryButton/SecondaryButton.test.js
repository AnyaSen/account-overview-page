import React from "react";
import { render, cleanup } from "@testing-library/react";

import SecondaryButton from "./SecondaryButton";

describe("<SecondaryButton />", () => {
  afterAll(cleanup);

  test("Should have correct text and be disabled.", () => {
    const text = "Show All";
    const isDisabled = true;

    const { getByText, container } = render(
      <SecondaryButton btnText={text} isDisabled={isDisabled} />
    );

    const button = getByText(text);

    expect(button).toBeTruthy();
    expect(button).toHaveAttribute("disabled");

    expect(container.firstChild).toMatchSnapshot();
  });
});
