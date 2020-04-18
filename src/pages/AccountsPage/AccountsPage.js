import React, { useContext } from "react";
import Styles from "./AccountsPage.module.scss";

import Header from "../../components/Header/Header";
import AccountsList from "../../components/AccountsList/AccountsList";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorCard from "../ErrorCard/ErrorCard";

import { LoadingContext } from "../../contexts/LoadingContext";
import { ErrorContext } from "../../contexts/ErrorContext";

export default function AccountsPage() {
  const { isLoading } = useContext(LoadingContext);
  const { isError } = useContext(ErrorContext);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorCard />;

  return (
    <div className={Styles.AccountsPage}>
      <Header />
      <AccountsList />
    </div>
  );
}
