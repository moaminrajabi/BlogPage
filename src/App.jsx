import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewPostPage from "./pages/NewPostPage";
import NotFound from "./pages/Not-Found";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-post" element={<NewPostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
