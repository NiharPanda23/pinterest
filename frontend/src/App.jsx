import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reset" element={<Reset/>}/>
      </Routes>
    </div>
  )
}

export default App
