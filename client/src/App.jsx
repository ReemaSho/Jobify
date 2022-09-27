import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<h1>Error</h1>} />
        <Route path="/" exact element={<div>Dashboard</div>} />
      </Routes>
    </Router>
  );
};
export default App;
