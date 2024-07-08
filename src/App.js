
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SingleRecipe from './pages/SingleRecipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/single' element={<SingleRecipe />}></Route>
        </Routes>

      </BrowserRouter>





















    </div>
  );
}

export default App;
