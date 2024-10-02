import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Chat() {
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const sndMsg = () => {
    Swal.fire({
      title: "sucses!",
      text: "Your Request has been send",
      icon: "succes",
      confirmButtonText: "thanks",
    });
    setMessage("");
    navigate("/home");
  };

  return (
    <div className="main">
      <div className="max-w-xl mx-auto my-8 p-6 bg-white border border-gray-500 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-red-800 border-b-2 pb-2">
          Request
        </h2>
        <img
            src="https://templates.bwlthemes.com/blood_donation/v_2/images/testimony_feat_img.jpg"
            height={900}
            width={900}
            className="border border-gray-300  mt-6 rounded-sm"
          />
        <div className="flex items-center pt-10">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Type your request here..."
          />
          <button
            onClick={sndMsg}
            className="bg-purple-500 text-white px-6 py-2 rounded-r-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            REQUEST
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
