import React from 'react'
import EventList from './EventList'

const EventUpdates = () => {
    return (
        <div className=' flex items-center mx-auto'>
            <div className=" flex md:flex-row flex-col items-center py-7 px-3 md:py-[60px] md:px-[40px] md:space-x-6 mx-auto">
                <div className="left hidden md:w-[50%] md:flex items-center mx-auto">
                    <div className="img-container w-full flex items-center rounded-xl shadow-md shadow-black">
                        <img src="https://i.postimg.cc/br6N8YFQ/Robo-wars.webp" alt="Event-Picture" className='rounded-xl flex items-center ' />
                    </div>
                </div>
                <div className="right md:w-[50%] w-full px-2 flex flex-col items-center space-y-5 py-3 md:py-0 mx-auto">
                    <h1 className=' text-2xl sm:text-3xl md:text-5xl font-bold text-center text-white mx-auto'>Upcoming Events</h1>
                    <p className='font-semibold text-sm text-slate-300 text-center'>Check out the exciting Lineup of Events at College Fest 2024...</p>
                    <div className="Event-lists w-full flex flex-col md:flex-row justify-around flex-wrap">
                        <EventList/>
                        <EventList/>
                        <EventList/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventUpdates
