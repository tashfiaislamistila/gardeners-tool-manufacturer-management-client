import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Review from './Pages/Home/Review';
import Tool from './Pages/Home/Tool';
import AllTools from './Pages/Home/AllTools';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tool" element={<AllTools />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="review" element={<Review />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
