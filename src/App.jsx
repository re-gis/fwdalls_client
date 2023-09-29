import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './screens/LandingPage'
import Roadmap from './components/RoadMap';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/test"
            element={<Roadmap />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
