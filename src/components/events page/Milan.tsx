import React from "react";
const dummy =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671733197/media%20council/milan_logo_og_rxtdnj.png";
const bg =
  "https://gymkhana.iith.ac.in/milan/static/media/image_6.e98b1bc549fcc8032f25.jpeg";
import Options from "./Options";

function Milan() {
  return (
    <section className="px-[2rem] py-[2rem] bg-[#000000d1] text-white relative lg:px-[7rem] lg:pt-[4rem] min-h-[100vh] lg:flex lg:flex-col lg:justify-center">
      <div className="w-full  h-[5rem]"></div>
      <Options eventId={"milan"} />
      <div className="relative z-10">
        <h2 className="text-4xl font-semibold uppercase lg:text-[4rem] lg:font-bold">
          Milan
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-5 lg:grow">
        <div className="w-full h-auto my-6 px-[2rem] lg:col-span-2 lg:flex justify-center items-center">
          <img src={dummy} alt="Elan & nVision" />
        </div>
        <div className="py-5 lg:col-span-3 self-center">
          <p className="lg:text-[1.25rem]">
            "Milan" is the annual techno-cultural-sports General Championship of
            IIT Hyderabad. It consists of 19 Sports, 18 Cultural and 11
            technical events conducted between all the hostel blocks. In this
            second edition of Milan, presented by SBI YONO, the sports,
            cultural, and technical events will start from 9th September and
            will conclude on 18th September
          </p>
          <div className="my-8 justify-end lg:flex text-black">
            <a
              href="https://milan.org.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="text-black scale-90 disabled text-xl bg-[#fec93d] px-4 py-3 rounded-lg">
                Navigate to Website
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="h-full w-full absolute top-0 left-0 -z-10 blur-sm ">
        <img src={bg} alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  );
}

export default Milan;
