import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponets from './Components/NavbarComponets/index.tsx';
import HomeComponets from './Components/HomeComponets/index.tsx';
import AboutComponets from './Components/AboutComponets/About.tsx';
import ContectUsComponets from './Components/ContectUsComponets/ContectUs.tsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponets />
          <Route exact path="/" component={HomeComponets} />
          <Route exact path="/about" component={AboutComponets} />
          <Route exact path="/about" component={ContectUsComponets} />

      </BrowserRouter>
    </>
  );
}

export default App;
