import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
          {/* <PrivateRoute exact path="/" element={<PrivateScreen/>}/> */}
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route exact path="/login" element={<Loginpage/>}></Route>
          {/* register */}
          <Route exact path="/register" element={<Register/>} ></Route>
          <Route exact path="/forgetPassword" element={<ForgetPassword/>}></Route>
          <Route exact path="/resetPassword/:resetToken" element={<ResetPassword/>}></Route>
          <Route exact path="/holyday" element={<Holyday/>}></Route>
          <Route exact path="/Payment" element={<Payment/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          {/* <Route exact path="/invite" element={<Invite/>}></Route> */}
          <Route exact path="/result" element={<Result/>}></Route>
          <Route exact path="/hostle" element={<Hostle/>}></Route>
          <Route exact path="/result_data" element={<ResultDetails/>}></Route>
          <Route  path="*" element={<NotFound/>}></Route>
          </Routes>
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
