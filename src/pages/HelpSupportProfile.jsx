import React from 'react'
import { Link } from 'react-router-dom';
import EventCard from '../Components/Events/EventCard';
import HelpSupportNavbar from '../Components/Profile-Navbar/HelpSupportNavbar';

const HelpSupportProfile = () => {
    return (
        <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full">
            <div className="phone-nav w-full fixed top-0 backdrop-blur-lg">
                <HelpSupportNavbar/>
            </div>
            <div className="Organiser-Profile-page py-[60px] w-full h-full flex justify-center">
                
                <div className="profile w-full flex flex-col py-[60px]">
                    <h1 className="text-white font-bold text-center md:text-5xl text-3xl underline underline-offset-8">
                        Welcome to your Dashboard!
                    </h1>
                    <div>
                        <h1 className="text-white font-bold text-3xl mt-8 text-center">
                            Event Winners
                        </h1>
                        <div className="event-winners flex justify-around flex-wrap">
                            <div className=" flex flex-col sm:flex-row justify-around items-center w-full py-[50px]">
                                <Link to="/ahwanWinners" className=" w-[95%] sm:w-[30%]">
                                    <EventCard name="Ahwan" url={"/Demo-pics/sports.jpg"} />
                                </Link>

                                <Link to="/anweshWinners" className=" w-[95%] sm:w-[30%]">
                                    <EventCard name="Anwesh" url={"/Demo-pics/tech.jpg"} />
                                </Link>

                                <Link to="/akankshaWinners" className=" w-[95%] sm:w-[30%]">
                                    <EventCard name="Akanksha" url={"/Demo-pics/cultural.webp"} />
                                </Link>
                            </div>
                            <div className='flex flex-col justify-center items-center w-screen space-y-8'>
                                <Link to="/support/add" className="w-full flex justify-center">
                                    <div className="events w-full h-[80px] md:w-[50%] sm:h-[100px] bg-[#2E294E] px-3 rounded-xl opacity-80 hover:scale-90 hover:opacity-30  font-bold text-4xl  hover:text-6xl  flex justify-center items-center shadow-lg shadow-blue-400 ">
                                        <p className="text-center opacity-100 text-white ">
                                            Add Users
                                        </p>
                                    </div>
                                </Link>

                                <Link to="/support/event" className="w-full flex justify-center">
                                    <div className="events w-full h-[80px] md:w-[50%] sm:h-[100px] bg-[#2E294E] px-3 rounded-xl opacity-80 hover:scale-90 hover:opacity-30  font-bold text-4xl  hover:text-6xl  flex justify-center items-center shadow-lg shadow-blue-400 ">
                                        <p className="text-center opacity-100 text-white ">
                                            Input Event Details
                                        </p>
                                    </div>
                                </Link>
                                
                                <Link to="/fest/Coordinators" className="w-full flex justify-center">
                                    <div className="events w-full h-[80px] md:w-[50%] sm:h-[100px] bg-[#2E294E] px-3 rounded-xl opacity-80 hover:scale-90 hover:opacity-30  font-bold text-4xl  hover:text-6xl  flex justify-center items-center shadow-lg shadow-blue-400 ">
                                        <p className="text-center opacity-100 text-white ">
                                            Fest Coordinators
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpSupportProfile
