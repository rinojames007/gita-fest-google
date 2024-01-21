import React, { useEffect, useState } from "react";import CreditsBox from "../Components/Credits/CreditsBox";

import Navbar from "../Components/Navbar/Navbar";

const CreditsPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleIframeLoad = () => {
    // Set loading to false when the iframe has finished loading
    setLoading(false);
  };

  const creditDetails = [
    {
      name: "Aryan ku Mohapatra",
      role: "Tech Team Head",
      insta: "https://www.instagram.com/aryan_mohapatra_35/",
      linkedIn: "https://www.linkedin.com/in/aryan-kumar-mohapatra-2751361a9/",
      twitter:"https://twitter.com/AryanKumarMoha5",
      photo: "https://i.postimg.cc/TYBN5TwL/Aryan.webp",
    },
    {
      name: "Rino James",
      role: "Tech Team Head",
      insta: "https://www.instagram.com/rinojames007?igsh=MWJ5MnZxMGN4MzVtag==/",
      linkedIn: "https://www.linkedin.com/in/rino-james-4ba710238/",
      twitter:"https://twitter.com/rinojames03",
      photo: "https://i.postimg.cc/NG7RXsz5/rino.webp",
    },
    {
      name: "Manish ku Samal",
      role: "Tech Team Head",
      insta: "http://surl.li/oumal",
      linkedIn: "http://surl.li/oulzz",
      twitter:"https://x.com/ManishK08285543?t=notMjDfmJn9h8Mco5GUkDw&s=09",
      photo: "https://i.postimg.cc/gjJcrH7y/manish.webp",
    },
    {
      name: "Ancil Antichan",
      role: "Design and Media",
      insta: "https://www.instagram.com/ancil_offical?igsh=ZnJ3Nm5iZWo4azM1",
      linkedIn: "https://www.linkedin.com/in/ancil-antichan-b2762b1aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter:"https://twitter.com/mathew_ancil?t=0ScmUDKEaN8NsBroE4tgpA&s=09",
      photo: "https://i.postimg.cc/wjSVjR5z/Ancil.webp",
    },
    {
      name: "Himanshu Shekhar Nayak",
      role: "Design and Media",
      insta: "https://www.instagram.com/_himanshu_nayak_/",
      linkedIn: "https://www.linkedin.com/in/himanshu-shekhar-nayak-9b829a249",
      twitter:"https://twitter.com/NoNeed15032003?t=VVER07HhOO_MrWcvgvZb_w&s=09",
      photo: "https://i.postimg.cc/TYs1LBfK/himanshu.webp",
    },
  ];
  return (
    <div className="w-full bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full ">
     
      <Navbar/>
      <h1 className="text-white underline underline-offset-8 md:text-5xl text-3xl pt-[80px] md:pt-[120px] font-bold text-center ">
        Credits
      </h1>
      <div className="flex pt-[40px] pb-[60px] flex-wrap justify-center items-center md:py-[40px] space-y-7 md:space-y-0 md:space-x-12">
        {creditDetails.map((item) => (
          <CreditsBox
            key={item.name}
            name={item.name}
            role={item.role}
            insta={item.insta}
            linkedIn={item.linkedIn}
            twitter={item.twitter}
            photo={item.photo}
          />
        ))}
      </div>
      {showBackToTop && (
          <button
            className="fixed bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={scrollToTop}
          >
            Back to Top
          </button>
        )}
    </div>
  );
};

export default CreditsPage;
