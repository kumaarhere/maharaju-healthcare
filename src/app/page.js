import Link from 'next/link';
import Image from 'next/image';
import Logo from '../app/images/logo-1.png';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="absolute top-4 left-4">
        <Image src={Logo} alt="logo" width={250} height={250} />
      </div>

      <h4 className="text-xl font-bold mb-6">Welcome to</h4>
      <h1 className="text-3xl font-bold mb-6">Maharaju HealthCare</h1>
      <div className="flex space-x-4">
        <Link href="/signup" className="bg-purple-800 shadow-md font-bold text-white py-2 px-4 rounded hover:bg-purple-600">
          Signup <i class="fa-solid fa-pen"></i>
        </Link>
        <Link href="/login" className="bg-white-300 border shadow-md font-bold text-purple py-2 px-4 rounded hover:bg-purple-600">
          Login <i class="fa-solid fa-right-to-bracket"></i>
        </Link>
      </div>
    </div>
  );
}
