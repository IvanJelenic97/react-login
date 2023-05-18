import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import NewPassword from "./newpassword/NewPassword";
import Reset from "./reset/Reset";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/newpassword" element={<NewPassword />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
