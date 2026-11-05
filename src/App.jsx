import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Movies from "./Pages/Movies";

import Favoris from "./Pages/Favoris";

const App=()=> {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Movies />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/favoris" element={<Favoris />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
