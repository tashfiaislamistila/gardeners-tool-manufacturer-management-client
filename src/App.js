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
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import Payment from './Pages/Dashboard/Payment';
import RequireUser from './Pages/Login/RequireUser';

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
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route path='/dashboard/myOrders' element={<RequireUser><MyOrder></MyOrder></RequireUser>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="payment/:id" element={<Payment />} />
          <Route path="review" element={<RequireUser><MyReview></MyReview></RequireUser>}></Route>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manageProduct" element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
          <Route path="manageOrders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
        </Route>
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
