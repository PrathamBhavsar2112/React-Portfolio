import Layout from "./components/Layout";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
