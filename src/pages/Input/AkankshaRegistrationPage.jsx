import React, { useState } from "react";
import { Link } from "react-router-dom";

const AkankshaRegistrationPage = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const Categories = ["Anchoring", "Dance", "Song", "Drama", "Fashion"];
  
    const handleClick = (item) => {
      if (selectedCategories.includes(item)) {
        // Item is already selected, remove it
        const updatedCategories = selectedCategories.filter(
          (elem) => elem !== item
        );
        setSelectedCategories(updatedCategories);
      } else {
        // Item is not selected, add it
        setSelectedCategories([...selectedCategories, item]);
      }
      
    };
  
    let restArr = Categories.filter((elem) => !selectedCategories.includes(elem));
  return (
    <div>
      <div className="bg-gradient-to-b from-black via-purple-900 pt-[60px] to-black h-full min-h-screen">
        <div className="absolute top-4 left-4">
          <Link to="/akanksha" className="w-fit">
            <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">
              Back
            </button>
          </Link>
        </div>
        <h1 className="md:text-5xl text-3xl  font-bold text-center my-8 text-white">
          Register Yourself {`Selected element: ${selectedCategories}`}
        </h1>
        <div className=" h-full mx-auto border-2 rounded-xl md:p-6 md:w-[80%] w-[95%] ">
          <form action="#" className="flex flex-col space-y-9 p-3 mx-auto">
            <p className="condition text-red-400 text-lg">
              * If you are registering, please note that your presence is
              required for practice/rehearsal from January 20, 2024, to February
              15, 2024. The event organizers may contact you at any time for
              practice sessions, regardless of whether you are a hosteller or a
              day scholar.
            </p>
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
                  <option value="MECHANICAL">MCA</option>
                  <option value="MECHANICAL">MBA</option>
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
              <div className="space-x-2 ml-4">
                <input type="radio" name="Gender" value="O" required />
                <span>Others</span>
              </div>
            </div>
            <div className="numbers text-white flex flex-wrap  space-y-4 md:space-y-0  justify-between items-center ">
              <div className="flex space-x-3 flex-wrap items-center">
                <label htmlFor="PhoneNumber">
                  <span className="text-lg font-bold">Phone Number:</span>
                </label>
                <input
                  type="tel"
                  placeholder="1234567890"
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
                  placeholder="1234567890"
                  className="border-2 rounded-sm outline-none text-black bg-slate-200 "
                  name="PhoneNumber"
                  required
                />
              </div>
            </div>
            <div className="categories">
              <div className="participation text-white flex flex-col justify-center  space-x-4">
                <label htmlFor="Participation" className="my-4">
                  <span className="text-lg font-bold ">
                    Choose your preferred participation:
                  </span>
                </label>
                <div className="categories md:space-x-5 flex-col items-center md:flex-row flex">
                  <div>
                    <input
                      type="checkbox"
                      name="Category"
                      value="Anchoring"
                      id="Anchoring"
                      className=""
                      onClick={() => {
                        handleClick("Anchoring");
                      }}
                      disabled={selectedCategories.length >= 2 && restArr.includes("Anchoring")}
                    />
                    <span> Anchoring</span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="Category"
                      value="Dance"
                      id="Dance"
                      className=""
                      onClick={() => {
                        handleClick("Dance");
                      }}
                      disabled={selectedCategories.length >= 2 && restArr.includes("Dance")}
                    />
                    <span> Dance</span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="Category"
                      value="Song"
                      id="Song"
                      className=""
                      onClick={() => {
                        handleClick("Song");
                      }}
                      disabled={selectedCategories.length >= 2 && restArr.includes("Song")}
                    />
                    <span> Song</span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="Category"
                      value="Drama"
                      id="Drama"
                      className=""
                      onClick={() => {
                        handleClick("Drama");
                      }}
                      disabled={selectedCategories.length >= 2 && restArr.includes("Drama")}
                    />
                    <span> Drama</span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="Category"
                      value="Fashion"
                      id="Fashion"
                      className=""
                      onClick={() => {
                        handleClick("Fashion");
                      }}
                      disabled={selectedCategories.length >= 2 && restArr.includes("Fashion")}
                    />
                    <span> Fashion</span>
                  </div>
                </div>
                <p className="text-sm font-thin my-3">
                  ( If you check a category and some categories are disabled,
                  then you cannot register for those. )
                </p>
              </div>
            </div>
            <div className="stay text-white flex justify-center items-center space-x-4">
              <label htmlFor="stay">
                <span className="text-lg font-bold">
                  Hosteller / Day Boarder:
                </span>
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
            <div className="agree-condition space-x-3">
              <input type="checkbox" required />
              <span className="font-semibold text-slate-200">
                By checking the box, you agree to the above conditions, and
                confirm that all your inputs are correct.
              </span>
            </div>
            <input
              type="submit"
              id="submit"
              className=" flex w-[200px] mx-auto px-3 justify-center bg-slate-600 py-3 text-lg rounded-lg hover:cursor-pointer hover:scale-90 text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AkankshaRegistrationPage;
