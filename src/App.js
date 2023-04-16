import { useState } from "react";
import React from "react";
import InputParameter from "./components/InputParameter";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div >
     <div className="bg-gradient-to-t from-green-300 via-blue-500 to-purple-600 h-screen ">
       <NavBar />
      <InputParameter />
     </div>
    </div>
  );
}

export default App;
