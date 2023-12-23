import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './components/Home';
import Login from './components/Login';
import Upload from './components/Upload';
import Videos from './components/Videos';
import Signup from './components/Signup';
import Three from './components/Three';


function App() {
  return (
    <BrowserRouter>

      <Menu />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/three' element={<Three/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
