import './App.css';
import { useState } from 'react';
import ReactDOM from "react-dom/client";
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import CardToko from './components/CardToko';
import Toko from './components/Toko';
import { useEffect } from 'react';

export default function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false)
  const [user, setUser] = useState()
  // const navigate = useNavigate();

  // const randomCompany = () => {
  //   let comp = ["Tokopedia", "Paragon", "Shopee", "Gojek", "Grab", "Amazon", "Emina"]
  //   let randomIndex = Math.floor(Math.random() * comp.length)
  //   return comp[randomIndex]
  // }

  const onLogin = (newUser) => {
    // let user = {name: null, company:null}
    // user.name = "Fa"
    // user.company = randomCompany()
    
    setisAuthenticated(true)
    setUser(newUser)
    // Code for submitting the form data goes here
  };
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate('/login');
  //   }
  // }, [isAuthenticated, navigate]);

  

  return(
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login handleSubmit={onLogin} />} />
          <Route path="/" element={<HomePage user={user} />} />
        </Routes>
    </BrowserRouter>

  )
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/login" element={<Login handleSubmit={onLogin}/>}/>
  //       <PrivateRoute path="/" component={<HomePage user={user} isAuthenticated={isAuthenticated}/>} />
  //       {/* <Route path="/" element={<HomePage user={user}/>}/> */}
  //     </Routes>
  //   </BrowserRouter>
  // );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
