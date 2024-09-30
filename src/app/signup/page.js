'use client'; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/logo-1.png';

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push('/login');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative p-3">

      <div className="absolute top-4 left-4">
        <Image src={Logo} alt="logo" width={250} height={250} /> 
      </div>

      <h2 className="text-2xl font-bold mb-6">Signup</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleInputChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="border p-2 w-full"
          required
        />
        <button className="bg-blue-500 font-bold text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
          Signup
        </button>
        <p className="text-center whitespace-nowrap">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500 font-bold">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
