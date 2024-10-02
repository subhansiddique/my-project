import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHeartbeat,
  faPeopleArrows,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import "./screens.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      {/* header */}
      <div className="img">
        <h1 className="text-6xl text-white font-extrabold font-mono">
         WELCOME
        </h1>
        <Link
          to="/home"
          className=" text-white pt-10 px-3 py-2 rounded-md text-lg font-medium"
        >
          Home 
        </Link>
      </div>
      {/* midd */}
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
            height={550}
            width={550}
            className="shadow-lg shadow-red-500/50 rounded-full"
          />
        </div>
      </div>

      {/* opinoin */}
      <div className="donor">
        <div className="flex items-center  flex-col w-[40vw] h-[50vh] bg-slate-50 mt-[40vh]">
          <h1 className="text-3xl font-bold mt-6">Donor Opinion</h1>
          <img
            src="https://templates.bwlthemes.com/blood_donation/v_2/images/user_2.jpg"
            height={90}
            width={90}
            className="border-2  mt-6 rounded-full"
          />
          <h1 className="text-2xl font-bold text-gray-500 mt-2">MUNSON BRANDON</h1>
          <p className="text-xl font-thin text-gray-500 mt-2">CTO,FULCRUM DESIGN,USA</p>
          <p className="text-1xl font-thin text-gray-500 mt-2">
            I have been a donor since high school.Although <br /> I have not
            been a donor every year,I want to <br /> give to the humman race.I
            love to help others!
            <br /> Moreover it give me a real peace in my mind
          </p>
        </div>
        <div className=" h-[70vh] mt-[40vh]">
          <img
          className="rounded-lg"
            src="https://templates.bwlthemes.com/blood_donation/v_2/images/testimony_feat_img.jpg"
            height={700}
            width={600}
          />
        </div>
      </div>

      {/* cards */}
      <div className="flex justify-around items-center mt-96">
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
      {/* footer */}
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}

export default Home;

// https://templates.bwlthemes.com/blood_donation/v_2/index.html
// npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
