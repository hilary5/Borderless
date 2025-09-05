import WithSubnavigation from "./components/NavBar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import LoginForm from "./components/SignIn";

function App() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <WithSubnavigation />
        <Routes>
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Sign-in" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
