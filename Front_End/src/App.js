import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adduser from './Components/Adduser';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Edituser from './Components/EditUser';
function App() {
  return (
    <div className="App">
     <div className="container">

      <BrowserRouter>

      <div className="row">
        <Navbar/>
      </div>
      <Routes>
      
        <Route path = "/" element={<Home/>}/>

        <Route path='/adduser' element={<Adduser/>} />

        <Route path='/edituser/:id' element={<Edituser/>} />

        
      </Routes>
      </BrowserRouter>
     </div>
    </div>
  );
}

export default App;
