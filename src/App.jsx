import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./screens/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-[100vw]">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
