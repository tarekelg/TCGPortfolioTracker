import { useEffect, useState } from "react";

import Login from "./Login";
import SignUp from "./SignUp";

const Entry = () => {
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

  return (
    <div
      action=""
      className="scanlines flex flex-col items-center text-white border-2 p-8 h-96 bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-blue-500"
    >
      <div className="flex items-center justify-center ">
        <a
          href="#"
          className={
            isLogin
              ? "px-3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border - gray - 400 dark:text-gray-300"
              : "px-3  pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
          }
          onClick={() => setIsLogin(true)}
        >
          Login
        </a>

        <a
          href="#"
          className={
            !isLogin
              ? "px-3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border - gray - 400 dark:text-gray-300"
              : "px-3  pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
          }
          onClick={() => setIsLogin(false)}
        >
          sign up
        </a>
      </div>

      {isLogin ? <Login /> : <SignUp />}
    </div>
  );
};

export default Entry;
