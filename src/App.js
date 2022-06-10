import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import View from "./components/student/View";
import Edit from "./components/student/Edit";
import Login from "./Login";
import Register from "./Register";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/view/:id" element={<View/>}/>
      <Route exact path="/edit/:id" element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
