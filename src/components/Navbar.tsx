import Image from "next/image";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="hidden lg:flex w-5/6 mx-auto h-32 justify-between items-center">
        <div>
          <Image
            src="/ssd-logo-01.png"
            alt="ssd-logo"
            height={150}
            width={250}
          />
        </div>
        <div>
          <ul className="flex lg:space-x-3 xl:space-x-5 w-full text-white items-center 2xl:text-xl">
            <li className="cursor-pointer hover:border-white hover:border-b-2">
              <span>HOME</span>
            </li>
            <li className="cursor-pointer hover:border-white hover:border-b-2">
              <span>COLLECTIONS</span>
            </li>
            <li className="cursor-pointer hover:border-white hover:border-b-2">
              <span>HOLOMAP</span>
            </li>
            <li className="cursor-pointer hover:border-white hover:border-b-2">
              <span>LORE</span>
            </li>
            <li className="cursor-pointer hover:border-white hover:border-b-2">
              <span>ARCADE</span>
            </li>
            <li className="cursor-pointer hover:border-white hover:border-b-2">
              <span>ABOUT</span>
            </li>
            <li className="text-xl text-white">
              <button className="bg-red-500 px-5 w-50 btn-con-wallet h-14">
                CONNECT WALLET
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="grid lg:hidden grid-cols-2 justify-items-stretch w-full">
        {/* <span className="text-xl w-full">Super Space Defenders</span> */}
        <Image
          src="/ssd-logo-01.png"
          alt="ssd-logo"
          height={120}
          width={200}
          className="justify-self-start"
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white mr-2 justify-self-end"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
        <ul
          className={`text-md justify-items-center text-white w-full col-span-2 ${
            isOpen ? "grid" : "hidden"
          }`}
        >
          <li className="hover:bg-red-200 rounded-md px-2">
            <span>HOME</span>
          </li>
          <li className="hover:bg-red-200 rounded-md px-2">
            <span>COLLECTIONS</span>
          </li>
          <li className="hover:bg-red-200 rounded-md px-2">
            <span>HOLOMAP</span>
          </li>
          <li className="hover:bg-red-200 rounded-md px-2">
            <span>LORE</span>
          </li>
          <li className="hover:bg-red-200 rounded-md px-2">
            <span>ARCADE</span>
          </li>
          <li className="hover:bg-red-200 rounded-md px-2">
            <span>ABOUT</span>
          </li>
          <li className="text-md text-white">
            <button className="bg-red-500 w-44 btn-con-wallet h-10">
              CONNECT WALLET
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
