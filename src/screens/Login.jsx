// import "./screen.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../database/firebase.config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = (props) => {
  console.log("🚀 ~ Signup ~ props:", props);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  function handleSignup(e) {
    localStorage.setItem("myKey", inputValue);
    setLoading(true);
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
        const uid = response.user.uid;
        const userdata = { name, email, uid };
        localStorage.setItem("user", response.user.uid);
        await setDoc(doc(db, "users", uid), userdata);

        Swal.fire({
          title: "Signup Complete",
          text: "Enjoy With Your Freinds",
          icon: "succes",
        });
        navigate("/home");

        // ...
      })
      .catch((error) => {
        Swal.fire({
          title: "Something Went Wrong!",
          text: error.message,
          icon: "error",
        });
        setLoading(false);
      });
  }

  // Function to handle form submission

  return (
    <div className="flex justify-center items-center min-h-screen bg-grey-100  ">
      <div className="w-full max-w-md bg-red-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-900"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-900"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-purple-700 mb-2"
              htmlFor="bloodGroup"
            >
              Blood Group
            </label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-900"
              required
            >
              <option value="" disabled>
                Select your blood group
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Submit Button */}

          {loading ? (
            <div className="h-24 w-24">
            <img src="https://th.bing.com/th/id/R.e42cb20be6939bc8590dede0a20cc6e0?rik=Z%2be10J5aE%2fbNQA&riu=http%3a%2f%2forig11.deviantart.net%2f03d6%2ff%2f2014%2f122%2f7%2fa%2floading_gif_by_zarzox-d7gwtxy.png&ehk=k6Hd%2bH5rAoGufy5%2fceZac7VuV1WDPSM%2bj9clzC5uzPo%3d&risl=&pid=ImgRaw&r=0" />
          </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-red-900 text-white py-2 rounded-lg hover:bg-red-500 transition duration-200"
              onClick={handleSignup}
            >
              Signup
            </button>
          )}

          <p className="register-text">
            <a href="/Login">login?</a>Forget Password
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
