import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await axios.post("http://localhost:3000/user/signin", {
                email: email,
                password: password,
            });
            if (localStorage.setItem("token", response.data.token)) {
                console.log('done');
            }
        } catch (error) {
            console.log("something broke", error);
        } finally {
            setLoading(false);
            //navigate("/");
        }
    };
    return (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-black via-purple-900 to-black">
            <div className="w-full m-auto py-[100px] max-w-md">
                <form
                    action="#"
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleSubmit}
                        >
                            {loading ? <Spinner /> : "Login"}
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className=" flex items-center justify-evenly mt-6">
                        {error ? error : " "}
                        Create account?{" "}
                        <Link to={"/signup"} className="font-bold text-blue-500 hover:text-blue-800" href="#">
                            SignUp
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
