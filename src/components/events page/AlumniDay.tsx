import React from "react";
const dummy = 'https://res.cloudinary.com/dwsverefw/image/upload/v1671962321/media%20council/Almuni-day-logo_w4pzmw.jpg'
const bg = '/images/alumni day.jpg'
import Options from "./Options";

function AlumniDay() {
  return (
    <section className="px-[2rem] py-[2rem] bg-[#000000d1] text-white relative lg:px-[7rem] lg:pt-[4rem] min-h-[100vh] lg:flex lg:flex-col lg:justify-center">
      <div className="w-full  h-[5rem]"></div>
      <Options eventId={'almuni-day'}/>
      <div className="relative z-10">
        <h2 className="text-4xl font-semibold uppercase lg:text-[4rem] lg:font-bold">Alumni Day</h2>
      </div>
     <div className="lg:grid lg:grid-cols-5 lg:grow"> 
     <div className="w-full h-auto my-6 px-[2rem] lg:col-span-2 lg:flex justify-center items-center">
        <img src={dummy} alt="diesta" />
      </div>
      <div className="py-5 lg:col-span-3 self-center">
        <p className="lg:text-[1.25rem]">
        Organised once every year, Alumni Day is a day specifically dedicated to the wonderful alums of IIT Hyderabad. Various events, ranging from cultural to technical to sports, are organised exclusively for the alums along with the campus tours. Exemplary alums are recognised by giving away awards in categories and special decennial celebrations are held for the batches completing 10 years of their graduation from IIT Hyderabad.
        </p>
      <div className="my-8 justify-end lg:flex">
        <a href='https://acr.iith.ac.in/' target='_blank' rel='noopener noreferrer'> <button className=" scale-90 disabled text-xl bg-blue-700 text-white px-4 py-3 rounded-lg">
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

export default AlumniDay;
