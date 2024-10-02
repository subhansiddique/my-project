import React from "react";
import Navbar from "./Navbar";
import "./screens.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHeartbeat,
  faPeopleArrows,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div>
      <Navbar />
      {/* header */}
      <div className="img">
        <h1 className="text-6xl text-white font-extrabold font-mono">
          ABOUT US
        </h1>
        <Link
          to="/home"
          className=" text-white pt-10 px-3 py-2 rounded-md text-lg font-medium"
        >
          Home / About
        </Link>
      </div>
      {/* info */}
      <div className=" flex justify-center items-center mt-[60px]">
        <div className=" shadow-lg shadow-gray-500/50 bg-gray-300 h-96 rounded-md">
          <h1 className="mt-6 px-6 text-6xl font-sans font-bold w-[40vw] text-gray-800">
            Who We Are?
          </h1>
          <p className=" px-6 mt-14 text-2xl font-sans  w-[40vw] text-red-800">
            Blood Buddies is for public donation center
            <br /> with blood donation members in the changing <br />
            health care system.
          </p>
          <ol className="ml-2 mt-6  px-6 text-sm font-sans font-bold w-[40vw] text-gray-800">
            <li>.Increasing communication with our members.</li>
            <li>.High quality assessment, diagnosis and treatment.</li>
            <li>.Specialist blood donors and clinical supervision.</li>
            <li>.The extra care of a multi-disciplinary team.</li>
          </ol>
        </div>
        <div>
          <img
            src="https://donateblood.pk/wp-content/uploads/2023/07/Donate-Blood-Save-Life-donateblood.jpg "
            height={450}
            width={550}
            className="shadow-full shadow-red-500/50 rounded-lg"
          />
        </div>
      </div>
      {/* cards */}
      <div><h1  className="text-gray-500 text-5xl mb-4  flex justify-center items-center mt-24">OUR ACHIEVEMENTS</h1></div>
      <div className="flex justify-around items-center mt-16">
        {/* card 1 */}
        <div className="border rounded-lg shadow-lg p-6 w-72 max-w-sm text-center">
          <FontAwesomeIcon
            icon={faHeartbeat}
            className="text-gray-500 text-5xl mb-4  hover:text-red-500 transition duration-200"
          />
          <h1 className="text-2xl text-red-600">2578</h1>
          <h1 className="text-2xl font-bold mb-2">Success Smile</h1>
        </div>
        {/* card2 */}
        <div className="border rounded-lg shadow-lg p-6 w-72 max-w-sm text-center">
          <FontAwesomeIcon
            icon={faUserDoctor}
            className="text-gray-500 text-5xl mb-4  hover:text-red-500 transition duration-200"
          />
          <h1 className="text-2xl text-red-600">3215</h1>
          <h1 className="text-2xl font-bold mb-2">Happy Donors</h1>
        </div>
        {/* card3 */}
        <div className="border rounded-lg shadow-lg w-72 p-6 max-w-sm text-center">
          <FontAwesomeIcon
            icon={faPeopleArrows}
            className="text-gray-500 text-5xl mb-4  hover:text-red-500 transition duration-200"
          />
          <h1 className="text-2xl text-red-600">2805</h1>
          <h1 className="text-2xl font-bold mb-2">Happy Recipient</h1>
        </div>
        {/* card4*/}
        <div className="border rounded-lg shadow-lg w-72 p-6 max-w-sm text-center">
          <FontAwesomeIcon
            icon={faBuilding}
            className="text-gray-500 text-5xl mb-4  hover:text-red-500 transition duration-200"
          />
          <h1 className="text-2xl text-red-600">1250</h1>
          <h1 className="text-2xl font-bold mb-2">Total Awards</h1>
        </div>
      </div>
      {/* new */}
      <div className="pl-10 mt-14 mb-10 h-72 border-double border-4 border-red-300 rounded-lg">
        <h1 className="text-5xl font-sans text-gray-800  mt-24">
          We are helping people from 40 years
        </h1>
        <p className="text-sm font-bold text-gray-400 mt-14">
          You can give blood at any of our blood donation venues all over the
          world.
          <br /> We have total sixty thousands donor centers and visit thousands
          of other venues on various occasions.
        </p>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default About;
