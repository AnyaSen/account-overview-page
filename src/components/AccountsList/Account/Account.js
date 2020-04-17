import React from "react";

export default function Account({ accName, accID, accBalance }) {
  return (
    <div>
      <p>Name: {accName}</p>
      <p>ID: {accID}</p>
      <p>Balance: {accBalance}</p>
    </div>
  );
}
