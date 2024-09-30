'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/logo-1.png';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    router.push('/dashboard'); 
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative p-2">
      <div className="absolute top-4 left-4">
        <Image src={Logo} alt="logo" width={250} height={250} />
      </div>

      
      <Image src={Logo} alt="logo" width={150} height={150} className="mb-6" />

      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
          required
        />
         <div className="flex justify-end">
          <Link href='/forget' className='text-right text-blue-500'>
            forget password?
          </Link>
        </div>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 w-full">
          Login <i className="fa-solid fa-right-to-bracket"></i>
        </button>
      </form>
    </div>
  );
}
