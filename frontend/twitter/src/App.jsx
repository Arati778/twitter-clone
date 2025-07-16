import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import { Toaster } from "react-hot-toast";
import Feed from "./components/Feed";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Feed />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
