import React from "react";
import { Routes, Route } from "react-router-dom";
import { Domains } from "./domain";
import { UI } from "./components";

function App() {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      {/* <UI.Header /> */}
      <UI.Navbar navtitle={"Ernesto Cano Pérez"} />
      <UI.Main>
        <Routes>
          <Route index path="/" element={<Domains.Home />} />
          <Route
            caseSensitive={false}
            path="/experiences"
            element={<Domains.Experiences />}
          />
          <Route
            caseSensitive={false}
            path="/certifications"
            element={<Domains.Certifications />}
          />
          <Route
            caseSensitive={false}
            path="/about"
            element={<Domains.About />}
          />
        </Routes>
      </UI.Main>
      <UI.Footer />
    </div>
  );
}

export default App;
