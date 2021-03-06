import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function signup() {
  const { user, signup } = useAuth();
  console.log(user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = await signup(email, password);
      router.push("/all-transaction");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    // Signup and Save money
    <>
      <div className=" mx-4 sm:mx-16  h-[85vh] mt-4 bg-primary rounded-3xl p-5 sm:p-16 flex justify-around sm:justify-between flex-wrap sm:flex-row flex-col">
        <div className=" sm:w-1/2">
          <h1 className=" sm:mt-32 text-center sm:text-left text-white  text-4xl sm:text-8xl font-extrabold">
            Log In and see your investments
          </h1>
        </div>

        <div className=" sm:w-1/2">
          <form className=" sm:my-32 sm:w-80 mx-auto " onSubmit={handleSignup}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">What is your e-mail?</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Add a strong password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <button
              className="px-3 mt-4 rounded-lg py-2 bg-gray-300 text-white text-lg font-medium"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
