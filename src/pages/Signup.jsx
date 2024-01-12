import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../store/atoms/user";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const setUser = useRecoilState(userState);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            await axios.post("http://localhost:3000/user/signup", {
                email: email,
                password: password,
            }).then(res => {
                const { token } = res.data;
                localStorage.setItem("token", token);
                setUser({
                    userID: email
                })
                navigate('/');
                // put up notification here "signup succesfull or welcome"
            }).catch((e) => {
                setError(response.data.message);
            })
        } catch (error) {
            console.log("something broke", error);
        } finally {
            setLoading(false);
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
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    <div className="mb-4 flex justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleSubmit}
                        >
                            {loading ? <Spinner /> : "Signup"}
                        </button>
                    </div>
                    <div className=" flex items-center justify-evenly">
                        <h3>{error ? error : " "}</h3>
                        Already have an account?{" "}
                        <Link to={`/login`} className="font-bold text-blue-500 hover:text-blue-800" href="#">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
