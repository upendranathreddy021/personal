import React from "react";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Gift from "./components/blog/Gift";
import sidenav from "./components/home/sidenav/Sidenav"

function App() {
  return (
    <div className="w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-pink-900 relative">
      <BrowserRouter>
     
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10">
        
      </div>
      <Routes>
        <Route path="/gift" element={<Gift/>}></Route>
<Route path="/sidenav" element={<sidenav/>}></Route>

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;