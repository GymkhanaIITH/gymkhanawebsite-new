import React from "react";
import TCard from "./teamCard";

const teams = {
  "Team": [
    ["Anjali Uikey", "BD23BDES11002", "bd23bdes11002@iith.ac.in", "9406815374", "Basketball Coordinator"],
    ["Siddharth Pamidi", "EP23BTECH11029", "ep23btech11029@iith.ac.in", "9901655155", "Aquatics Coordinator"],
    ["Nisha", "CH24BTECH11025", "CH24BTECH11025@IITH.AC.IN", "9741373921", "Athletics coordinator"],
    ["Sai chandan", "MS24BTECH11021", "ms24btech11021@iith.ac.in", "9490392256", "Athletics coordinator"],
    ["Atharv Kochar", "ce24btech11010", "ce24btech11010@iith.ac.in", "6394987574", "Badminton Coordinator"],
    ["Mathew M Philip", "ee22btech11211", "ee22btech11211@iith.ac.in", "8089040111", "Basketball Coordinator"],
    ["Shiva Chethan Halamane", "cs24btech11057", "cs24btech11057@iith.ac.in", "9482156304", "Chess coordinator"],
    ["Jhori Ayush Prakash Satish", "ch23btech11022", "ch23btech11022@iith.ac.in", "8421743800", "Football coordinator"],
    ["Hanokk", "Co23btech11025", "co23btech11025@iith.ac.in", "8885211202", "Gym coordinator"],
    ["Jayanth", "Co23btech11005", "Co23btech11005@iith.ac.in", "", "Activities Coordinator"],
    ["Mohammad Shees", "ME22BTECH11035", "me22btech11035@iith.ac.in", "7081770180", "Gym coordinator"],
    ["KURRE VINAY", "ee23btech11036", "ee23btech11036@iith.ac.in", "9392418084", "Hockey Coordinator"],
    ["Mohammed Fawwaz Ali", "me23btech11038", "me23btech11038@iith.ac.in", "8328206136", "Squash coordinator"],
    ["Shounak Kamutala", "EP23BTECH11027", "ep23btech11027@iith.ac.in", "8624003213", "Table Tennis coordinator"],
    ["Mannepalli Namitha", "MA24BTECH11015", "ma24btech11015@iith.ac.in", "7013875348", "Volley ball coordinator"],
    ["Taimur Karim", "IC23BTECH11023", "ic23btech11023@iith.ac.in", "7001875191", "Weightlifting coordinator"],
    ["Vivaswan Rai", "", "", "", "Tennis Coordinator"],
    ["Sudhanshu", "", "", "", "Cricket Coordinator"],
    ["Sai Dhanush", "", "", "", "Volley ball coordinator"],
  ]
};

function Sports() {
  return (
    <>
      <div className="my-8">
        <h2 className="lg:text-4xl text-3xl font-bold text-center  lg:text-left">
          Sports Secretary
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-[#2f2f2f] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className=" text-p">Sports Secretary </h4>
            <h3 className="lg:text-2xl text-xl font-semibold ">
              Kowsith Gurubilli
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">
                +91 8121181256
              </h4>
              <a
                href="mailto:sports_secy@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                sports_secy@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
        </div>

        <div className="mx-5">
          <h2 className="mt-9 lg:text-4xl text-3xl font-bold text-center  lg:text-left">
            Team
          </h2>
          {Object.keys(teams).map((key, index) => {
            const info = teams[key];
            return (
              <div className="mt-2" key={key}>
                {/* <h3 className="font-semibold text-3xl mt-5">{key}</h3> */}
                <div className="flex flex-wrap [&>div]:flex-shrink-0   md:[&>div]:basis-[19.75rem] xs:[&>div]:basis-[4.75rem] flex-col md:flex-row gap-2">
                  {info.map((member, i) => {
                    return (
                      <TCard
                        key={i}
                        name={member[0]}
                        email={member[2]}
                        mobile={member[3] ? "+91 " + member[3] : ""}
                        position={member[4]}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sports;
