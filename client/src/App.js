import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Loginpage from './screen/Loginpage';
import Homepage from './screen/Homepage';
import Register from './screen/Register';
import ForgetPassword from './screen/ForgetPassword';
import ResetPassword from './screen/ResetPassword';
import Holyday from './screen/Holyday';
import Payment from './screen/Payment';
import About from './screen/About';
import Result from './screen/Result';
import NotFound from './component/NotFound';
import ResultDetails from './screen/ResultDetails';
import Hostle from './screen/Hostle';
import Community from './screen/Community';
import Protected from './Protected';
import { useEffect, useState } from 'react';
import Transport from './screen/Transport';
import { useSelector } from 'react-redux';
import Chat from './screen/Chat';


function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
          {/* <PrivateRoute exact path="/" element={<PrivateScreen/>}/> */}
          {/* <Route exact path="/" element={<Homepage/>}></Route> */}
          <Route exact path="/" element={<Loginpage/>}></Route>
          <Route exact path="/home" element={
           <Homepage/>
          }/>
          {/* register */}
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/forgetPassword" element={<ForgetPassword/>}/>
          <Route exact path="/resetPassword/:resetToken" element={<ResetPassword/>}/>
          <Route exact path="/holyday" element={<Holyday/>}/>
          <Route exact path="/Payment" element={<Payment/>}/>
          <Route exact path="/community" element={<Community/>}/>
          <Route exact path="/transport" element={<Transport/>}/>
          <Route exact path="/about" element={<About/>}/>
          {/* <Route exact path="/invite" element={<Invite/>}></Route> */}
          <Route exact path="/result" element={<Result/>}/>
          <Route exact path="/hostle" element={<Hostle/>}/>
          <Route exact path="/result_data" element={<ResultDetails/>}/>
          <Route exact path="/result_data" element={<ResultDetails/>}/>
          <Route  path="*" element={<NotFound/>}/>
          <Route path="/chat" element={user ? <Chat /> : <Navigate to="/" />} />
          </Routes>
     <Footer/>
    </div> 
    </BrowserRouter>
  );
} 

export default App;
