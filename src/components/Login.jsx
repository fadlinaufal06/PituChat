import React, { useState } from 'react';
import LoginImage from '../assets/image-40.svg';
import Logo from '../assets/image-1-10@2x.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = ({handleSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // setEmail("kocak");
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const randomCompany = () => {
    let comp = ["Tokopedia", "Paragon", "Shopee", "Gojek", "Grab", "Amazon", "Emina"]
    let randomIndex = Math.floor(Math.random() * comp.length)
    return comp[randomIndex]
  }

  const submit = (event) => {
    event.preventDefault();
    // console.log("login")
    const newUser = { name: '', company: '' };
    newUser.name = email;
    newUser.company = randomCompany();;
    console.log(newUser)
    handleSubmit(newUser);
    routeChange();
  };

    // event.preventDefault();
    // const newUser
    // newUser.name = email
    // newUser.company = randomCompany()
    // setUser(newUser)
    // user.name = event.target.elements.email.value
    // newUser.name = "asdasds"
    // newUser.company = "Kompani"

    // handleSubmit(newUser)
    // Code for submitting the form data goes here

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div>
        <img src={LoginImage} alt="Left" />
      </div>
      <div className="p-4">
        <img src={Logo} alt="logo" className="mx-auto" />
        <h2 className="text-3xl font-bold text-center my-4">Login ke akunmu</h2>
        <p className="text-center mb-8">Masuk akun untuk menggunakan PituChat</p>
        <form onSubmit={submit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2 text-start">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2 text-start">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className='text-right'>
            <a
              href="/forgot-password"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-4"
            >
              Lupa password?
            </a>
          </div>

  
            
          <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Masuk
              </button>
          </div>
       

        </form>
      </div>
      
    </div>
  );
}

export default Login;