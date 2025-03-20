// import { useState } from "react";

// import "./App.css";
// import Main from "./components/Main";

// function App() {
//   return (
//     <>
//       <Main />
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Main from "./components/Main";
import SignUp from "./components/Signup";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
