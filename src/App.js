import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LoginSuccess from "./LoginSuccess";
import SignupSuccess from "./SignupSuccess";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<SignupSuccess />} />
        <Route path="details/:countryId" element={<CountryDetails />} />
        <Route path='login' element={<Login />} />
        <Route path='success' element={<LoginSuccess />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
