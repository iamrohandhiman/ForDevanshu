
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from "./Components/Navbar"
import { Postman } from "./Pages/Postman";
import { Home } from "./Pages/Home"
import { Recipient } from "./Pages/Recipient";
function App() {


  return (
    <BrowserRouter>
      <Navbar/>
    
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/postman" element={<Postman />}></Route>
      <Route path="/recipient" element={<Recipient />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
