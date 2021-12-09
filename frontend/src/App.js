import { Routes, Route } from "react-router-dom";
import "./App.css";

import Hero from "./pages/Hero/Hero";
import SingleBook from "./pages/SingleBook/Singlebook";

function App() {
  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/single-book' element={<SingleBook />} />
      </Routes>
    </main>
  );
}

export default App;
