import {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';

const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import ('./components/Landing'));

function App() {

    //Suspense API
  return (
    <div>
    <BrowserRouter>
     <Appbar />
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
        <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
    </Routes>
      </BrowserRouter>
    </div>
      )
}

function Appbar() {
  const navigate = useNavigate();

  return <div>
     <div>
        <button onClick={() => {
          // window.location.href = "/";   //this will reload the page (just same like writing /dashboard in url)
          navigate("/");
        }}> Landing page</button>

        <button onClick={() => {
          // window.location.href = "/dashboard";   //this will reload the page (just same like writing /dashboard in url)
          navigate("/dashboard");
        }}> Dashboard page </button>

     </div>
  </div>
}

export default App
