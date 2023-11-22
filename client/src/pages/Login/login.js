import React, { useState } from 'react';
import KULogo from '../../assets/KUlogo/KUlogo.png';
import { IoPerson } from 'react-icons/io5';
import { IoMdLock } from 'react-icons/io';
import axios from 'axios';
import { baseUrl } from '../../url';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [stdId, setStdId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${baseUrl}/auth/login`, {
        std_id: stdId,
        password: password,
      });
      localStorage.setItem('userInfo', JSON.stringify(res.data.details));
      localStorage.setItem('accessToken', res.data.access_token);
      navigate('/');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center gap-y-10">
        <div className="w-56 flex justify-center items-center flex-col gap-y-2">
          <img src={KULogo} width="100" alt="" />
          <p className="font-[500] text-lg ">Login with Account Notri</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-center items-center gap-x-2 border border-solid border-primaryGreen-200 px-10 py-3 rounded-full">
            <IoPerson className="text-primaryGreen-200" />
            <input
              placeholder="Account Nontri"
              className="outline-none"
              onChange={(e) => setStdId(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center gap-x-2 border border-solid border-primaryGreen-200 px-10 py-3 rounded-full">
            <IoMdLock className="text-primaryGreen-200" />
            <input
              placeholder="Password"
              className="outline-none"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className=" border border-solid border-primaryGreen-200 mt-4 px-10 py-2 rounded-full bg-primaryGreen-200 font-bold text-[#fff] text-lg"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="text-center">
            <p>forgot password?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
