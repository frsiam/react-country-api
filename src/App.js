import { useAuthState } from "react-firebase-hooks/auth";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Signup from "./components/Signup";
import auth from "./firebase.init";

function App() {
  const [user] = useAuthState(auth)
  if (!user) {
    return <Loading />
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<div className="container text-center mt-8">
          <h1 className="text-4xl text-slate-800 font-bold">Contgratulations <span className="text-rose-600">{user?.displayName}</span></h1>
          <section className="mt-4">
            <h2 className="text-xl">Your email address is: <span className="text-3xl font-semibold underline text-blue-600">{user?.email}</span></h2>
          </section>
        </div>} />
        <Route path="details/:id" element={<CountryDetails />} />
        <Route path='login' element={<Login />} />
        <Route path='success' element={<div className="container text-center mt-8">
          <h1 className="text-4xl text-violet-700 font-bold">Welcome to <span className="text-pink-600">{user?.displayName}</span></h1>
          <section className="mt-4">
            <h2 className="text-xl">Your email address is: <span className="text-3xl font-semibold underline text-blue-600">{user?.email}</span></h2>
          </section>
        </div>} />
        <Route path='signup' element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
