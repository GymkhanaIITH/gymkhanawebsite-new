import React from "react";
const dummy = 'https://res.cloudinary.com/dwsverefw/image/upload/e_colorize,co_white/v1671732157/media%20council/esummitlogo_syh9sc.png'
const bg = 'https://ecell-iith-main.netlify.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwsverefw%2Fimage%2Fupload%2Fv1665878886%2Fecell%2Fhostels_svd8y6.jpg&w=1920&q=75'
import Options from "./Options";

function Esummit() {
  return (
    <section className="px-[2rem] py-[2rem] bg-[#000000d1] text-white relative lg:px-[7rem] lg:pt-[4rem] min-h-[100vh] lg:flex lg:flex-col lg:justify-center">
      <div className="w-full  h-[5rem]"></div>
      <Options eventId={'e-summit'}></Options>
      <div className="relative z-10">
        <h2 className="text-4xl font-semibold uppercase lg:text-[4rem] lg:font-bold">E-Summit</h2>
      </div>
     <div className="lg:grid lg:grid-cols-5 lg:grow"> 
     <div className="w-full h-auto my-6 px-[2rem] lg:col-span-2 lg:flex justify-center items-center">
        <img src={dummy} alt="Elan & nVision" />
      </div>
      <div className="py-5 lg:col-span-3 self-center">
        <p className="lg:text-[1.25rem]">
        E-Summit is the flagship event of E-Cell IITH which aims to bring early entrepreneurs, students, corporates, venture capitalists and start-ups with burgeoning ideas from all over the county to one platform to share their entrepreneur ventures and wisdom. This summit provides a medium for healthy discussion and inculcates an entrepreneurial mindset into minds through a plethora of events like debates and panel discussions.
        </p>
        <div className="my-8 justify-end  lg:flex">
        <a href='https://ecell.iith.ac.in/esummit' target='_blank' rel='noopener noreferrer'> <button className=" scale-90 disabled text-xl bg-white text-black px-4 py-3 rounded-lg">
          Navigate to Website
        </button></a>
        </div>
      </div>
      
      </div>
      
      <div className="h-full w-full absolute top-0 left-0 -z-10 blur-sm ">
        <img src={bg} alt="" className="h-full w-full object-cover"/>
      </div>
    </section>
  );
}

export default Esummit;
