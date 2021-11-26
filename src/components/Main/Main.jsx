import React from "react";

export default function Main({ children }) {
  return (
    <main className="flex flex-col flex-wrap content-center flex-grow m-2">
      {children}
    </main>
  );
}
