import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>hello</h1>} />
        <Route path='/home' element={<h1>hello</h1>} />
        <Route path='login' element={<h1>Login</h1>} />
        <Route path='signup' element={<h1>Signup</h1>} />
      </Routes>
    </div>
  );
}

export default App;
