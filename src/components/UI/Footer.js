/* eslint-disable @next/next/no-img-element */
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
 
export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
      <p className="text-xl font-[calibri] font-extrabold text-blue-600">PC BUILDER</p>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
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
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 PC BUILDER
      </Typography>
    </footer>
  );
}
