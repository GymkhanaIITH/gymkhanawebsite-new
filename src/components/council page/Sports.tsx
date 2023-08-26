import React from "react";

function Sports() {
  return (
    <>
      <div>
        <a href="https://sports.iith.ac.in/" target="_blank" rel="noopener">
          <button className="bg-p text-w px-3 py-2 rounded-md hover:scale-105 transition-all mb-8">
            Know More
          </button>
        </a>
      </div>
      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-black lg:text-left">
          Sports Secretary
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g">
            <h4 className=" text-p">Sports Secretary </h4>
            <h3 className="lg:text-2xl text-xl font-semibold text-black">
              Guguloth Hruday
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">
                +91 9063809446
              </h4>
              <a
                href="mailto:scitech_secy@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                sports_secy@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
        </div>
        {/* <div>
            <h2 className='mt-9 lg:text-4xl text-3xl font-bold text-center text-black lg:text-left'>Team</h2>
        </div> */}
      </div>
    </>
  );
}

export default Sports;
