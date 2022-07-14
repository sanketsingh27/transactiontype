import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className=" py-3 px-3 sm:px-16 flex justify-between items-center shadow-2xl">
      <h1 className="  inline-block font-bold text-xl sm:text-4xl">
        <span className=" text-primary">Rabbit</span>
        <span className=" text-gray-700">Money</span>
      </h1>

      <div>
        {user ? (
          <div className="flex gap-1">
            <button
              className=" py-1 sm:py-2 px-3 sm:px-5 bg-gray-100 text-gray-600 font-medium rounded-lg hover:drop-shadow-lg"
              onClick={() => {
                logout();
                router.push("/login");
              }}
            >
              Logout
            </button>

            <button
              className="  sm:hidden py-1 sm:py-2 px-3 sm:px-5 bg-gray-600 text-white font-medium rounded-lg hover:drop-shadow-lg"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              menu
            </button>
          </div>
        ) : (
          <>
            <Link href="/signup" passHref>
              <a className=" mr-3 rounded-lg px-5 py-2 bg-primary text-white text-lg font-medium">
                Signup
              </a>
            </Link>
            <Link href="/login" passHref>
              <a className=" px-5 rounded-lg py-2 bg-gray-300 text-black text-lg font-medium">
                Login
              </a>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
