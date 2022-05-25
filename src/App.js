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
import SignUp from './Pages/Login/SignUp';
import PurchaseTools from './PurchaseDetails/PurchaseTools';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
function App() {
  return (
    <div className='max-w-7xl mx-auto px-12 '>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="tool" element={<AllTools />} />
        <Route path='/tools/:toolsId' element={
          <RequireAuth>
            <PurchaseTools />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }></Route>
        <Route path="blogs" element={<Blogs />} />
        <Route path="review" element={<Review />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
