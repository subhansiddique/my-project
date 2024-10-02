import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Loading = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const userId = await localStorage.getItem("userId");
    setTimeout(() => {
      if (userId !== null) {
        navigate("/home");
      } else {
        navigate("/login");
      }
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-blue-400 border-dotted rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
    </div>
    <h2 className="ml-4 text-xl font-semibold text-blue-500">Loading...</h2>
  </div>
  );
};

export default Loading;