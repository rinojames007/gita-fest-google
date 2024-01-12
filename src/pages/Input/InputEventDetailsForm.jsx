import React, { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import axios from "axios";
import { Link } from "react-router-dom";

const InputEventDetailsForm = () => {
    const [RulesInputValue, setRulesInputValue] = useState("");
    const [ItemsInputValue, setItemsInputValue] = useState("");

    const [eventID, setEventID] = useState("");
    const [eventName, setEventName] = useState("");
    const [eventDesc, setEventDesc] = useState("");
    const [RulesItems, setRulesItems] = useState([]);
    const [ItemsList, setItemsList] = useState([]);
    const [time, setTime] = useState(new Date());
    const [venue, setVenue] = useState("");
    const [prize, setPrize] = useState("");

    const [loading, setLoading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const data = {
        eventID,
        eventName,
        eventDesc,
        RulesItems,
        ItemsList,
        time: JSON.stringify(time.toISOString()),
        venue,
        prize
    }

    const handleDateChange = (event) => {
        const newDate = new Date(event.target.value);
        const localDate = new Date(newDate.getTime() + 330 * 60000);
        setTime(localDate);
    };

    const getRules = () => {
        setRulesItems([...RulesItems, RulesInputValue]);
        setRulesInputValue("");
    };

    const displayRules = () => {
        const RulesArr = RulesItems.map((item, index) => (
            <li key={index}> {item}</li>
        ));

        return RulesArr;
    };

    const getItemsNeeded = () => {
        setItemsList([...ItemsList, ItemsInputValue]);
        setItemsInputValue("");
    };

    const displayItemsNeeded = () => {
        const ItemNeededArr = ItemsList.map((item, index) => (
            <li key={index}> {item}</li>
        ));
        return ItemNeededArr;
    };

    useEffect(() => {
        async () => {
            try {
                setLoading(true);
                const response = await axios.post(`http://localhost:3000/support/create`, {
                    data
                }, {
                    onUploadProgress: event => {
                        const progress = Math.round((event.loaded / event.total) * 100);
                        setUploadProgress(progress);
                    }
                });
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false)
            }
        }
    }, []);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-black via-purple-900 to-black py-9">
            <div className="absolute top-4 left-4">
                <Link to="/support/profile" className="w-fit">
                    <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">
                        Back
                    </button>
                </Link>
            </div>
            <h1 className="flex justify-center items-center sm:text-5xl text-3xl font-bold text-white py-5">
                Input Event Details

                {loading ? (
                    <div style={{ width: '100%', height: '20px', background: '#eee', marginTop: '10px' }}>
                        <div
                            style={{
                                width: `${uploadProgress}%`,
                                height: '100%',
                                background: '#8e7db0',
                                transition: 'width 0.3s ease-in-out',
                            }}
                        ></div>
                    </div>
                ) : " "}
            </h1>
            <div className=" h-fit mx-auto border-2 rounded-xl md:p-6 md:w-[85%] w-[95%] ">
                <div className="flex flex-col space-y-9 p-3 mx-auto">
                    <div className="Event Name flex items-center space-x-4 text-white">
                        <label htmlFor="Event-Id">
                            <span className="text-lg font-bold">Event Id:</span>
                        </label>
                        <input
                            type="text"
                            className="border-2 px-2 w-full md:w-[60%] h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                            name="EventID"
                            onChange={(e) => setEventID(e.target.value)}
                            placeholder="Event ID..."
                            required
                        />
                    </div>
                    <div className="Event Name flex items-center space-x-4 text-white">
                        <label htmlFor="Event-Name">
                            <span className="text-lg font-bold">Event Name:</span>
                        </label>
                        <input
                            type="text"
                            className="border-2 px-2 w-full md:w-[60%] h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                            name="EventName"
                            placeholder="Event Name..."
                            onChange={(e) => setEventName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="EventDesc flex flex-col md:flex-row items-center md:space-x-4 text-white">
                        <label htmlFor="EventDesc">
                            <span className="text-lg font-bold">Event Description:</span>
                        </label>
                        <textarea
                            name="EventDesc"
                            rows="6"
                            cols="50"
                            className="border-2 px-2 w-[95%] md:w-[50%] rounded-sm outline-none text-black bg-slate-200 "
                            placeholder="Event Description..."
                            onChange={(e) => setEventDesc(e.target.value)}
                            required
                        />
                    </div>
                    <div className="Event-Rules">
                        <div className="Event Rule flex flex-col md:flex-row space-y-3 md:space-y-0 items-center md:space-x-4 text-white">
                            <label htmlFor="Event-Rule">
                                <span className="text-lg font-bold">Event Rule:</span>
                            </label>
                            <input
                                type="text"
                                className="md:w-[50%] w-full h-[35px] rounded-md px-2 outline-none text-black"
                                placeholder="Add Rules..."
                                value={RulesInputValue}
                                onChange={(e) => setRulesInputValue(e.target.value)}
                                id="RulesText"
                            />
                            <div
                                className="addBtn px-5 py-2 bg-slate-800 rounded-lg hover:scale-90 shadow-sm hover:cursor-pointer hover:shadow-blue-400 "
                                id="AddRule"
                                onClick={getRules}
                            >
                                <span className="font-semibold ">Add</span>
                            </div>
                        </div>
                        <div className="Rules-Display flex justify-center my-5">
                            <ul className="text-white list-disc">{displayRules()}</ul>
                        </div>
                    </div>

                    <div className="Event-Items-Required">
                        <div className="Event-Items-Required flex flex-col md:flex-row space-y-3 md:space-y-0 items-center md:space-x-4 text-white">
                            <label htmlFor="Event-Items-Required">
                                <span className="text-lg font-bold">Event Items Required:</span>
                            </label>
                            <input
                                type="text"
                                className="md:w-[50%] w-full h-[35px] px-2 rounded-md outline-none text-black"
                                placeholder="Add Items-Required..."
                                id="ItemsText"
                                value={ItemsInputValue}
                                onChange={(e) => {
                                    setItemsInputValue(e.target.value);
                                }}
                            />
                            <div
                                className="addBtn px-5 py-2 bg-slate-800 rounded-lg hover:scale-90 shadow-sm hover:cursor-pointer hover:shadow-blue-400 "
                                id="AddItems-Required"
                                onClick={getItemsNeeded}
                            >
                                <span className="font-semibold ">Add</span>
                            </div>
                        </div>
                        <div className="Items-Required-Display flex justify-center my-5">
                            <ul className="text-white list-disc">{displayItemsNeeded()}</ul>
                        </div>
                    </div>

                    <div className="DAte-and-timmings flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between">
                        <div className="timming space-x-2">
                            <label htmlFor="Time" className="text-white text-xl font-bold">
                                Timing:
                            </label>
                            <input type="datetime-local" value={time.toISOString().slice(0, 16)} onChange={handleDateChange} />
                        </div>
                    </div>
                    <div className="Event-Venue space-x-3 flex flex-col md:flex-row">
                        <label htmlFor="Venue" className="text-white text-xl font-bold">
                            Venue :
                        </label>
                        <input
                            type="text"
                            className="md:w-[50%] px-2 w-full h-[35px] rounded-md outline-none"
                            placeholder="Venue..."
                            onChange={(e) => setVenue(e.target.value)}
                        />
                    </div>

                    <div className="Event-Prize space-x-3 flex flex-col md:flex-row">
                        <label htmlFor="Prize" className="text-white text-xl font-bold">
                            Prize :
                        </label>
                        <input
                            type="text"
                            className="md:w-[50%] px-2 w-full h-[35px] rounded-md outline-none"
                            placeholder="Prize..."
                            onChange={(e) => setPrize(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => console.log(data)}
                        className=" flex w-[200px] mx-auto px-3 justify-center bg-slate-600 py-3 text-lg rounded-lg hover:cursor-pointer hover:scale-90 text-white"
                    >
                        {loading ? <Spinner /> : "Submit"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InputEventDetailsForm;
