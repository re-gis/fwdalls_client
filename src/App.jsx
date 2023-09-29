import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './screens/LandingPage'
import CircularLoader from './utils/CircularLoader';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/test"
            element={<CircularLoader percentage={45} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
