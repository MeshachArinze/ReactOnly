import { Routes, Route } from "react-router-dom";
import Signin from "./sign_in";

function Home() {
  return (
    <Routes>
      <Route path="/signin/*" element={<Signin />} />
    </Routes>
  );
}

export default Home;
