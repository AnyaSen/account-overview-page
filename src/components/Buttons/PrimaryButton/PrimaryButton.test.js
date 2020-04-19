import React from "react";
import { render, cleanup } from "@testing-library/react";

import PrimaryButton from "./PrimaryButton";

describe("<PrimaryButton />", () => {
  afterAll(cleanup);

  test("Should have correct text and be disabled.", () => {
    const text = "Search";
    const isDisabled = true;

    const { getByText, container } = render(
      <PrimaryButton btnText={text} isDisabled={isDisabled} />
    );

    const button = getByText(text);

    expect(button).toBeTruthy();
    expect(button).toHaveAttribute("disabled");

    expect(container.firstChild).toMatchSnapshot();
  });
});
