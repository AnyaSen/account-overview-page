import React from "react";
import { render, cleanup } from "@testing-library/react";

import UserInfo from "./UserInfo";

describe("<UserInfo />", () => {
  afterAll(cleanup);

  test("Should have correct name & number.", () => {
    const name = "John Smith";
    const accNumber = 70;
    const userPic = "userPic.svg";

    const { getByTestId, getByAltText, container, getByText } = render(
      <UserInfo
        userName={name}
        accountsNumber={accNumber}
        userPicture={userPic}
      />
    );

    const UserNumber = getByTestId("number-of-accounts");
    const UserText = getByText(name);
    const userPicture = getByAltText("User Face");

    expect(UserNumber).toBeTruthy();
    expect(UserText).toBeTruthy();
    expect(userPicture).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
