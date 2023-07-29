/* eslint-disable @next/next/no-img-element */
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { FaGithub,FaFacebook,FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-6 gap-x-12 bg-white text-center">
        <div className="flex flex-col items-center md:items-start gap-y-2">
          <p className="text-xl font-[calibri] font-extrabold text-blue-600">PC BUILDER</p>
          <p className="text-sm text-blue-gray-500">7/11 Mohammadpur, Dhaka -1207</p>
          <p className="text-sm text-blue-gray-500">Bangladesh</p>
        </div>
        <ul className="flex flex-col items-start gap-y-2 gap-x-8">
          <li>
            <Link
              as="a"
              href="/products"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              as="a"
              href="/builder"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              PC Builder
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-8">
      <p className="text-sm capitalize font-semibold text-blue-gray-500">Social contacts</p>
      <div className="flex justify-center items-center gap-x-6">
        <a href="https://github.com/Shihab-Sabbir/PC-BUILDER" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-800">
          <FaGithub size={24} />
        </a>
        <a href="https://www.facebook.com/shihab.sabbir.9" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.linkedin.com/in/shihab-sabbir-034879224/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-800">
          <FaLinkedin size={24} />
        </a>
        
        <a href="https://your-google-profile" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
          <FcGoogle size={24} />
        </a>
      </div>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; {new Date().getFullYear()} PC BUILDER. All rights reserved.
      </Typography>
    </footer>
  );
}
