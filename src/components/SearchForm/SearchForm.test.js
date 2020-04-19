import React from "react";
import { render, cleanup } from "@testing-library/react";

import { AccountsContextProvider } from "../../contexts/AccountsContext";
import { LoadingContextProvider } from "../../contexts/LoadingContext";
import { ErrorContextProvider } from "../../contexts/ErrorContext";

import SearchForm from "./SearchForm";

describe("<SearchForm />", () => {
  afterAll(cleanup);

  const createRenderTree = () => (
    <ErrorContextProvider>
      <LoadingContextProvider>
        <AccountsContextProvider>
          <SearchForm />
        </AccountsContextProvider>
      </LoadingContextProvider>
    </ErrorContextProvider>
  );

  test("Should have have 2 children.", () => {
    const tree = createRenderTree();

    const { getByTestId, container } = render(tree);

    const SearchFormContainer = getByTestId("Search-form");

    expect(SearchFormContainer.children.length).toEqual(2);

    expect(container.firstChild).toMatchSnapshot();
  });
});
