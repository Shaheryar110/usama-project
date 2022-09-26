import { BrowserRouter ,  Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage"
import Grandfather from "./components/Grandfather";
import './App.css';


function App() {
  return( 
    <div className="app">
    <BrowserRouter>
    {/* <Mainpage /> */}
    <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/second' element={<Grandfather />} />
    </Routes>
  </BrowserRouter>
</div>
     )
 
  
}

export default App;
