import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import HeaderNav from "./sections/HeaderNav";

function App() {
  return (
    <div className="App">
      <HeaderNav/>
        <Routes>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes >
    </div >
  );
}

export default App;
