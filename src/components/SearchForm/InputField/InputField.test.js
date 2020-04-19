import React from "react";
import { render, cleanup } from "@testing-library/react";

import InputField from "./InputField";

describe("<InputField />", () => {
  afterAll(cleanup);

  test("Should have correct placeholder & value.", () => {
    const placeholder = "ID";
    const idValue = "HAS43O";

    const { container, getByPlaceholderText } = render(
      <InputField
        placeholder={placeholder}
        inputValue={idValue}
        onChange={() => {}}
      />
    );

    const input = getByPlaceholderText(placeholder);

    expect(input).toBeTruthy();
    expect(input.value).toBe(idValue);

    expect(container.firstChild).toMatchSnapshot();
  });
});
