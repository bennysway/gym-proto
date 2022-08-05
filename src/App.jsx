import { Route, Routes } from "@solidjs/router"

import Default from "./usecases/default/Default"
import { lazy } from "solid-js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/memes" element={<h1>Memes here</h1>} />
        <Route path="/" component={Default} />
      </Routes>
    </>
  );
}

export default App;
