import React from 'react'
import { Link } from 'react-router-dom'

const Videos = () => {

    const links =[
        {
            url:"https://www.youtube.com/embed/SECIxFV8L0Q?si=333hwu6lZTU8MyAf"
        },
        {
            url:"https://www.youtube.com/embed/7S6Min_Fxvs?si=nwGAhuqoUUyeDvq-"
        },
        {
            url:"https://www.youtube.com/embed/M5H5q4tHPik?si=vaeY1Lx3fAX5nAfA"
        },
        {
            url:"https://www.youtube.com/embed/thMlZT-6qGU?si=DsIrZZf92Ss9lrhz"
        },
        {
            url:"https://www.youtube.com/embed/ZkluWYxc8Rs?si=pMjybMs34PmMq_xS"
        },
        {
            url:"https://www.youtube.com/embed/ln8RBpyQR5o?si=FQ-J-CPXXbXp5lZE"
        },
        {
            url:"https://www.youtube.com/embed/H6CdRnVMIK0?si=v9wHTImG11EbNow8"
        },
        {
            url:"https://www.youtube.com/embed/fDVQ7O9aUCc?si=TRwefYSS2o81VpFj"
        },
        {
            url:"https://www.youtube.com/embed/GzKPfOPSeAQ?si=KjO1-GB5McAFHUR7"
        },
        {
            url:"https://www.youtube.com/embed/FoDOP4leUok?si=dI8Dl-pqqGHyWEGk"
        },
        {
            url:"https://www.youtube.com/embed/uxhP-TXyyR4?si=P1-zreUKHSnkVf9u"
        },
        {
            url:"https://www.youtube.com/embed/A2XIJD6vd3g?si=ErnxfqJ_hPhmIsg7"
        },
        {
            url:"https://www.youtube.com/embed/NoKr2nKlOw4?si=EP6WfN3jNfVpCIdJ"
        },
        {
            url:"https://www.youtube.com/embed/S8w5L8OGYHU?si=9uO7x4jn5o-0He94"
        },
        {
            url:"https://www.youtube.com/embed/8aAOTyx5BJE?si=uu2fZqItrM6wY7_Q"
        },
        {
            url:"https://www.youtube.com/embed/Oh-7wOKgGHw?si=2OnhdJlS5H7J0xqn"
        }
        
    ]
  return (
    <div className="bg-gradient-to-b py-[50px] from-black via-purple-900 to-black min-h-screen h-full">
        <div className="absolute top-4 left-4">
        <Link to="/gallery" className="w-fit">
          <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">
            Back
          </button>
        </Link>
      </div> 
        <div className="videos w-[90%] rounded-md flex items-center justify-center flex-col sm:flex-row flex-wrap sm:space-x-5 mx-auto space-y-8  py-6">
      {links.map((index) => (
        <div key={index} className="sm:w-[30%] rounded-md md:h-[300px] sm:h-[200px] 2xl:h-[400px] 2xl:w-[45%] h-[200px] w-full max-w-screen my-5">
          <iframe
            className="w-full h-full"
            src={index.url}
            title={`Dance Performance ${index}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Videos