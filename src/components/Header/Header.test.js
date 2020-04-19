import React from "react";
import { render, cleanup } from "@testing-library/react";

import { UserInfoContextProvider } from "../../contexts/UserInfoContext";
import { AccountsContextProvider } from "../../contexts/AccountsContext";
import { LoadingContextProvider } from "../../contexts/LoadingContext";
import { ErrorContextProvider } from "../../contexts/ErrorContext";

import Header from "./Header";

describe("<Header />", () => {
  afterAll(cleanup);

  const createRenderTree = () => (
    <ErrorContextProvider>
      <LoadingContextProvider>
        <AccountsContextProvider>
          <UserInfoContextProvider>
            <Header />
          </UserInfoContextProvider>
        </AccountsContextProvider>
      </LoadingContextProvider>
    </ErrorContextProvider>
  );

  test("Should have have 2 children.", () => {
    const tree = createRenderTree();

    const { getByTestId, container } = render(tree);

    const HeaderContainer = getByTestId("Header");

    expect(HeaderContainer.children.length).toEqual(2);

    expect(container.firstChild).toMatchSnapshot();
  });
});
