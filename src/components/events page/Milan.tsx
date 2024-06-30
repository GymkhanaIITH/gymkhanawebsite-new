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
          Milan is IIT Hyderabad’s General championship between the Hostels, it is packed with sports, cultural, and tech competitions. It's so prestigious and one of the largest tournaments in Telugu states. We can expect this event for 10 days of a big blast of intense competition between the hostels in September of this year.
          MILAN stands out as one of the most significant events at IIT Hyderabad due to its inclusive approach. With a football of over 5000 students, it transforms the campus into a hub of excitement. The event not only highlights the exceptional abilities of IIT Hyderabad students but also promotes teamwork, innovation, and cultural exchange. MILAN is a celebration of talent, creativity, and sportsmanship, making it a cornerstone of student life at IIT Hyderabad.
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
