
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";


import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../database/firebase.config";
import { useNavigate } from "react-router-dom";

function Find() {

    const [users, setUsers] = useState([]);
    const [savedValue, setSavedValue] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const list = [];
    const dbSnap = await getDocs(collection(db, "users"));
    dbSnap.forEach((item) => {
      list.push(item.data());
      setUsers(list);
    });
 
  };

  useEffect(() => {
    const value = localStorage.getItem("myKey");
    setSavedValue(value || "B+");
  }, []);
    return(
   <div>
    <Navbar />

    <div className="img">
        <h1 className="text-6xl text-white font-extrabold font-mono">
          FIND DONOR
        </h1>
        <Link
          to="/home"
          className=" text-white pt-10 px-3 py-2 rounded-md text-lg font-medium"
        >
          Home / Find donor
        </Link>
      </div>
    <h1 className="flex justify-center  pt-28 pb-28 w-[100vw] text-5xl underline-offset-4 text-gray-600 text-shadow: 28px 17px 6px rgba(0,0,0,0.6);">FIND DONORS</h1>

    <div className="rounded-lg  shadow-lg border flex justify-around flex-row flex-wrap w-[100vw]">
      
      


{users.map(item => (
        <div key={item.uid} onClick={()=>navigate(`/chat`  ,{state : item})} className="cursor-pointer w-11/12 shadow-md border border-black bg-blue-500 shadow-gray-300 rounded-md mx-auto my-4 py-5 px-10 flex justify-between">
          <div className="flex items-center">
            <img src={item.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtNBgCacCwHhxVPj1ubPRygdT7X_7w_UrLQ&s"} alt="" className="w-16 mr-4 rounded-full border-2 border-gray-500" />
            <div>
              <h1 className="uppercase font-semibold text-xl">{item.name}</h1>
              <h1 className="text-gray-600">{item.email}</h1>
              <p className="text-gray-700 mt-2">
          <span className="font-semibold">Blood Group: </span>{savedValue}
        </p>
            </div>
          </div>
          <div className="mt-6">
          <button className="w-full bg-red-900 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 transition duration-200">
            Request Info
          </button>
        </div>
        </div>
      ))}
    </div>
  <Footer />
   </div>
)
}
export default Find;
