import { Route, Routes } from "react-router-dom";
import "./App.css";

// eslint-disable-next-line

import Home from "./component/Home";
import ProfileMobile from "./component/ProfileMobile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myprofile" element={<ProfileMobile />} />
      </Routes>
    </>
  );
}

export default App;
