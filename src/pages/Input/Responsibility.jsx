import React, { useState } from "react";
import { Link } from "react-router-dom";

function Responsibility() {
  // Form Validation

  //  const [SelectedRole, setSelectedRole] = useState("");

  //  const handleClick = (name) => {
  //    let str = name;
  //    setSelectedRole(str);

  //  };

  // Backend
  const [role, setRole] = useState("");
  const [eventDay, setEventDay] = useState("");
  const [eventId, setEventId] = useState("");
  const [eventName, setEventName] = useState("");
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [wpNo, setWpNo] = useState("");

  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const data = {
    role,
    eventDay,
    eventId,
    eventName,
    name,
    roll,
    email,
    password,
    phoneNo,
    wpNo,
  };

  const handleSubmit = () => {
    useEffect(() => {
      async () => {
        try {
          setLoading(true);
          const response = await axios.post(
            `http://localhost:3000/support/addperson`,
            {
              data,
            },
            {
              onUploadProgress: (event) => {
                const progress = Math.round((event.loaded / event.total) * 100);
                setUploadProgress(progress);
              },
            }
          );
        } catch (e) {
          console.error(e);
        } finally {
          setLoading(false);
        }
      };
    }, []);
  };

  return (
    <div className="w-full min-h-screen h-full flex flex-col justify-center items-center bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="absolute top-4 left-4">
        <Link to="/support/profile" className="w-fit">
          <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">
            Back
          </button>
        </Link>
      </div>
      <h1 className="flex justify-center items-center sm:text-5xl text-3xl font-bold text-white py-5">
        Add Users
        {loading ? (
          <div
            style={{
              width: "100%",
              height: "20px",
              background: "#eee",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                width: `${uploadProgress}%`,
                height: "100%",
                background: "#8e7db0",
                transition: "width 0.3s ease-in-out",
              }}
            ></div>
          </div>
        ) : (
          " "
        )}
      </h1>
      <div className=" h-fit mx-auto border-2 rounded-xl md:p-6 md:w-[85%] w-[95%] ">
        <div className="flex flex-col space-y-9 p-3 mx-auto">
          <div className="flex items-center sm:space-x-4 text-white">
            <label htmlFor="Role" className="text-lg font-bold">
              Role:
            </label>
            <select
              name="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className=" mx-2 text-black"
              id="Role"
            >
              <option value="">Responsibility</option>
              <option
                value="Volunteer"
                // onClick={() => handleClick("Volunteer")}
              >
                Volunteer
              </option>
              <option
                value="Coordinator"
                // onClick={() => handleClick("Coordinator")}
              >
                Coordinator
              </option>
              <option
                value="Event Incharge"
                // onClick={() => handleClick("Event Incharge")}
              >
                Event Incharge
              </option>
              <option
                value="Organiser"
                // onClick={() => handleClick("Organiser")}
              >
                Organiser
              </option>
              <option
                value="TimeKeeper"
                // onClick={() => handleClick("TimeKeeper")}
              >
                Timekeeper
              </option>
              <option 
              value="Recorder"
              // onClick={() => handleClick("Recorder")}
              >
                Recorder
              </option>
              <option
                value="Track Refree"
                // onClick={() => handleClick("Track Refree")}
              >
                Track Referee
              </option>
            </select>
          </div>
          <div className="flex flex-col sm:space-x-4 text-white ">
            <label
              htmlFor="Event-Details"
              className="text-lg  text-center font-bold"
            >
              Event Details
            </label>
            <div className="flex flex-wrap space-y-4 xl:space-y-0  sm:space-x-3 py-3">
              <div className="space-x-2 flex flex-wrap">
                <span className="text-lg font-bold">Event Day: </span>
                <select
                  name="Event-Day"
                  className=" mx-2 text-black"
                  id="Event-Day"
                  value={eventDay}
                  onChange={(e) => setEventDay(e.target.value)}
                >
                  <option value="">Choose the Day</option>
                  <option value="Ahwan">Ahwan</option>
                  <option value="Anwesh">Anwesh</option>
                  <option value="Akanksha">Akanksha</option>
                </select>
              </div>
              <div className="space-x-2 flex flex-wrap">
                <span className="text-lg font-bold">Event Id:</span>
                <input
                  type="text"
                  className="border-2 px-2 w-full md:w-[60%] h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                  name="Event-Id"
                  placeholder="Event Id ..."
                  value={eventId}
                  onChange={(e) => setEventId(e.target.value)}
                  // disabled={SelectedRole === "Organiser"}
                />
              </div>
              <div className="space-x-2 flex flex-wrap">
                <span className="text-lg font-bold">Event Name:</span>
                <input
                  type="text"
                  className="border-2 px-2 w-full md:w-[60%] h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                  name="Event-Name"
                  placeholder="Event Name ..."
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  // disabled={SelectedRole === "Organiser"}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center sm:space-x-4 text-white">
            <label htmlFor="Name" className="text-lg font-bold">
              Name:
            </label>
            <input
              type="text"
              className="border-2 px-2 w-full md:w-[60%] h-[35px] rounded-sm outline-none text-black bg-slate-200 "
              name="Name"
              required
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-evenly items-center sm:space-x-4 text-white">
            <p className=" text-red-400 text-lg">* for students</p>
            <label htmlFor="Roll-no" className="text-lg font-bold">
              Roll No:
            </label>
            <input
              type="text"
              className="border-2 px-2 w-full md:w-[60%] h-[35px] rounded-sm outline-none text-black bg-slate-200 "
              name="Roll-No"
              required
              placeholder="Enter Roll No"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              // disabled={SelectedRole === "Organiser"}
            />
          </div>
          <div className="flex flex-wrap justify-evenly items-center sm:space-x-4 text-white">
            <p className=" text-red-400 text-lg">* for faculty</p>
            <label htmlFor="Roll-no" className="text-lg font-bold">
              Employee ID:
            </label>
            <input
              type="text"
              className="border-2 px-2 w-full md:w-[60%] h-[35px] rounded-sm outline-none text-black bg-slate-200 "
              name="Roll-No"
              required
              placeholder="Enter Employee ID"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-around space-y-3 sm:space-y-0 sm:space-x-4 text-white">
            <div>
              <label htmlFor="Email" className="text-lg font-bold">
                Email:
              </label>
              <input
                type="email"
                className="border-2 px-2 w-full h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                name="Email"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="Password" className="text-lg font-bold">
                Password:
              </label>
              <input
                type="password"
                className="border-2 px-2 w-full h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                name="Password"
                placeholder="Your PassWord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:justify-around items-center space-y-3 sm:space-y-0 sm:space-x-4 text-white">
            <div className="flex flex-col ">
              <label htmlFor="Phone-Number" className="text-lg font-bold">
                Phone Number:
              </label>
              <input
                type="tel"
                className="border-2 px-2 w-full  h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                name="PhoneNUmber"
                placeholder="Phone Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="WhatsApp-Number" className="text-lg font-bold">
                WhatsApp Number:
              </label>
              <input
                type="tel"
                className="border-2 px-2 w-full  h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                name="WhatsAppNUmber"
                placeholder="WhatsApp Number"
                value={wpNo}
                onChange={(e) => setWpNo(e.target.value)}
              />
            </div>
          </div>
          <div className="checkbox flex space-x-3 ">
            <input
              type="checkbox"
              name="checked"
              id="checked"
              className="w-5"
              required
            />
            <span className="text-blue-300 text-sm">
              All Inputs are Correct ?
            </span>
          </div>
          <div className="flex items-center justify-center pb-4 hover:scale-95 transition-all delay-100">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-slate-700 text-white rounded-lg font-semibold shadow-md shadow-blue-400"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Responsibility;
