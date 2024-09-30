'use client'; // Needed for state management in Next.js app directory

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/logo-1.png';

export default function ForgetPassword() {
  const router = useRouter();
  const [contactInfo, setContactInfo] = useState('');

  const handleInputChange = (e) => {
    setContactInfo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();



    console.log("Code sent to:", contactInfo);

  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative">

      <div className="absolute top-4 left-4">
        <Image src={Logo} alt="logo" width={250} height={250} /> {/* Smaller logo */}
      </div>

      <Image src={Logo} alt="logo" width={150} height={150} className="mb-6" /> {/* Main logo */}

      <h2 className="text-2xl font-bold mb-6" style={{ color: '#42175C' }}>
        Get a verification code
       </h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="Email/Mobile number"
          value={contactInfo}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
          required
        />
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 w-full">
          Get Code
        </button>
      </form>
    </div>
  );
}
