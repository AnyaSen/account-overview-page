import React from "react";
import { render, cleanup } from "@testing-library/react";

import Account from "./Account";

describe("<Account />", () => {
  afterAll(cleanup);

  test("Should have correct name, id, balance and active status.", () => {
    const name = "FUNDING_ACCOUNT";
    const id = "ZCPN537";
    const balance = 60;
    const active = true;

    const { getByText, getByTestId, container } = render(
      <Account name={name} ID={id} balance={balance} active={active} />
    );

    const nameText = getByText(`Name: ${name}`);
    const IDText = getByText(`ID: ${id}`);
    const balanceValue = getByText(`Balance: ${balance}`);
    const activeStatus = getByTestId("active-pin");

    expect(nameText).toBeTruthy();
    expect(IDText).toBeTruthy();
    expect(balanceValue).toBeTruthy();
    expect(activeStatus).toHaveClass("activePin");

    expect(container.firstChild).toMatchSnapshot();
  });

  test("Should have inactive status.", () => {
    const active = false;

    const { getByTestId } = render(<Account active={active} />);

    const activeStatus = getByTestId("active-pin");

    expect(activeStatus).toHaveClass("inactivePin");
  });
});
