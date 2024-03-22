import LoginPanel from "./components/Login/Login"
import Register from "./components/Register/Register"

import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers.jsx';
function App() {
  return (
    <Routes>
      <Route path="/dealer/:id" element={<Dealers/>} />  
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/postreview/:id" element={<PostReview/>} />
    </Routes>

  );
}
export default App;
