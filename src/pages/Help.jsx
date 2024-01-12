import ProfileNav from "../Components/Profile-Navbar/ProfileNav";

export default function Help() {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full">
      
        <div className="navbar w-full fixed top-0 backdrop-blur-lg">
          <ProfileNav />
        </div>
        <div className=" flex py-[60px] justify-center w-full h-full">
         
          <div className="hero w-full h-full m-4 flex-col justify-center text-center item-center ">
            <p className="text-3xl font-bold text-white">
              Help and support page....
            </p>
          </div>
        </div>
      </div>
    
  );
}
