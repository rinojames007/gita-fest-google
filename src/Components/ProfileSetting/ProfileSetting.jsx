import React from "react";

const ProfileSetting = () => {
  return (
    <div className=" h-full mx-auto border-2 rounded-xl md:p-6 md:w-[80%] w-[95%] ">
      <form action="#" className="flex flex-col space-y-9 p-3 mx-auto">
        <div className="name flex items-center space-x-4 text-white">
          <label htmlFor="name">
            <span className="text-lg font-bold">Name:</span>
          </label>
          <input
            type="text"
            className="border-2 w-full md:w-[80%] rounded-sm outline-none text-black bg-slate-200 "
            name="name"
            placeholder="Enter your full Name..."
            required
          />
        </div>
        <div className="RollNumber flex  items-center space-x-4 text-white">
          <label htmlFor="RollNumber">
            <span className="text-lg font-bold">Roll Number:</span>
          </label>
          <input
            type="text"
            name="RollNumber"
            className="border-2 w-[50%] rounded-sm outline-none text-black bg-slate-200"
            placeholder="Enter your Roll Number..."
            required
          />
        </div>
        <div className="courseInfo text-white flex justify-between flex-row flex-wrap items-center space-y-4 md:space-y-0 space-x-4">
          <div className="space-x-3">
            <label htmlFor="Course">
              <span className="text-lg font-bold">Course:</span>
            </label>
            <select
              name="Course"
              id="Course"
              className="border-2 text-black rounded-sm outline-none bg-slate-200"
              required
            >
              <option value="BTech">B-Tech</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
            </select>
          </div>
          <div className="space-x-3">
            <label htmlFor="Year">
              <span className="text-lg font-bold">Year</span>
            </label>
            <select
              name="Year"
              id="Year"
              className="border-2 text-black rounded-sm outline-none bg-slate-200"
              required
            >
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">Last</option>
            </select>
          </div>
          <div className="space-x-3">
            <label htmlFor="Branch">
              <span className="text-lg font-bold">Branch:</span>
            </label>
            <select
              name="Branch"
              id="Branch"
              className="border-2 rounded-sm outline-none text-black bg-slate-200"
              required
            >
              <option value="">Branch</option>
              <option value="CSE">CSE</option>
              <option value="CSIT">CSIT</option>
              <option value="CSDS">CSDS</option>
              <option value="CSAI">CSAI</option>
              <option value="CST">CST</option>
              <option value="CIVIL">CIVIL</option>
              <option value="EEE">EEE</option>
              <option value="ECE">ECE</option>
              <option value="MECHANICAL">ME</option>
            </select>
          </div>
        </div>
        <div className="gender text-white flex  flex-wrap items-center ">
          <label htmlFor="Gender">
            <span className="text-lg font-bold">Gender:</span>
          </label>
          <div className="space-x-2 ml-4">
            <input type="radio" name="Gender" value="M" required />
            <span>Male</span>
          </div>
          <div className="space-x-2 ml-4">
            <input type="radio" name="Gender" value="F" required />
            <span>Female</span>
          </div>
        </div>
        <div className="numbers text-white flex flex-wrap  space-y-4 md:space-y-3  justify-between items-center ">
          <div className="flex space-x-3 flex-wrap items-center">
            <label htmlFor="PhoneNumber">
              <span className="text-lg font-bold">Phone Number:</span>
            </label>
            <input
              type="tel"
              placeholder="0000000000"
              className="border-2 rounded-sm outline-none text-black bg-slate-200 "
              name="PhoneNumber"
              required
            />
          </div>
          <div className="flex space-x-3 flex-wrap items-center">
            <label htmlFor="Whatsapp-Number">
              <span className="text-lg font-bold">Whatsapp Number:</span>
            </label>
            <input
              type="tel"
              placeholder="0000000000"
              className="border-2 rounded-sm outline-none text-black bg-slate-200 "
              name="PhoneNumber"
              required
            />
          </div>
        </div>
        <div className="mail text-white flex flex-wrap my-3 items-center space-x-4">
          <label htmlFor="Email">
            <span className="text-lg font-bold">Email:</span>
          </label>
          <input
            type="email"
            name="Email"
            className="border-2 w-full md:w-[50%] rounded-sm outline-none text-black bg-slate-200"
            placeholder="abc@gmail.com"
            required
          />
        </div>
        <div className="stay text-white flex justify-center items-center space-x-4">
          <label htmlFor="stay">
            <span className="text-lg font-bold">Hosteller / Day Boarder:</span>
          </label>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
            <input type="radio" name="Staying" value="Hosteller" />
            <span className="text-sm md:text-xl">Hosteller</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
            <input type="radio" name="Staying" value="Day Boarder" />
            <span className="text-sm md:text-xl">Day Boarder</span>
          </div>
        </div>
        <input
          type="submit"
          id="submit"
          className=" flex w-[200px] mx-auto px-3 justify-center bg-slate-600 py-3 text-lg rounded-lg hover:cursor-pointer hover:scale-90 text-white"
        />
      </form>
    </div>
  );
};

export default ProfileSetting;
