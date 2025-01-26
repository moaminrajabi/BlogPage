import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewPostPage from "./pages/NewPostPage";
import NotFound from "./pages/Not-Found";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-post" element={<NewPostPage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
