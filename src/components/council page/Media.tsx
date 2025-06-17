import React from "react";
import TCard from "./teamCard";
// const PR = [
//   {
//     position: "head",
//     name: "Kuntal Suman",
//     mobile: " +91-8578001808",
//     mail: "ce21btech11022@iith.ac.in",
//   },
//   {
//     position: "coordinator",
//     name: "Krishna chaitanya",
//     mobile: "",
//     mail: " es24btech11023@iith.ac.in",
//   },
//   {
//     position: "coordinator",
//     name: "Namitha Mannepalli",
//     mobile: "",
//     mail: " ma24btech11015@iith.ac.in",
//   },
//   {
//     position: "coordinator",
//     name: "Jagan Bevara",
//     mobile: "",
//     mail: "es24btech11010@iith.ac.in",
//   },
//   {
//     position: "coordinator",
//     name: "Atharv Bung",
//     mobile: "",
//     mail: "bt24btech11005@iith.ac.in",
//   },
//   {
//     position: "coordinator",
//     name: "Kripalu Sonar",
//     mobile: "",
//     mail: "es24btech11021@iith.ac.in",
//   },
//   {
//     position: "coordinator",
//     name: "Susheel Chandra",
//     mobile: "",
//     mail: "es24btech11013@iith.ac.in",
//   }
  
  
// ];
// const Des = [];
// const Content = [];
// const Web = [];
// const Int = [];
// const Events = [];
// const Multimedia=[];

const teams = {
  PR: [
    [
      "Neel", 
      "7075310192", 
      "ms23btech11014@iith.ac.in", 
      "head"
    ],
    [
      "Disha",
      "7981565134",
      "ch23btech11015@iith.ac.in",
      "head"
    ],
    [
      "Krishna Chaitanya",
      "",
      "es24btech11023@iith.ac.in",
      "coordinator",
    ],
    [
      "Namitha Mannepalli",
      "",
      "ma24btech11015@iith.ac.in",
      "coordinator",
    ],
    [
      "Jagan Bevara",
      "",
      "es24btech11010@iith.ac.in",
      "coordinator",
    ],
    [
      "Atharv Bung",
      "",
      "bt24btech11005@iith.ac.in",
      "coordinator",
    ],
    [
      "Kripalu Sonar",
      "",
      "es24btech11021@iith.ac.in",
      "coordinator"
    ],
    [
      "Susheel Chandra",
      "",
      "es24btech11013@iith.ac.in",
      "coordinator"
    ],
  ],
  Design: [
    [
      "Nidhi",
      "+91-9370999343",
      "",
      "head",
    ],
    [
      "Rajdeep",
      "+91-9108512020",
      "bd24bdes11023@iith.ac.in",
      "head"
    ],
    [
      "Aastha B",
      "",
      "bd22bdes11001@iith.ac.in",
      "coordinator",
    ],
    [
      "Durva Chaudhary",
      "",
      "bd24bdes11026@iith.ac.in",
      "coordinator",
    ],
    [
      "David P Sajan",
      "",
      "bd24bdes11024@iith.ac.in",
      "coordinator",
    ],
    [
      "Ruchita Lunkad",
      "",
      "bd24bdes11007@iith.ac.in",
      "coordinator",
    ],
    [
      "Sujeet Yadav",
      "",
      "bd24bdes11016@iith.ac.in",
      "coordinator",
    ],
  ],
  Edit: [
    ["Aryan", "+91-9108548555", "bt23btech11004@iith.ac.in", "head"],
    ["Harini","+91-7416447993","me23btech11054@iith.ac.in","head"],
    [
      "Vishnu Anand",
      "",
      "me23btech11064@iith.ac.in",
      "coordinator",
    ],
    [
      "Homa Harshita",
      "",
      "ee24btech11062@iith.ac.in",
      "coordinator",
    ],
    [
      "Shanyu Bihani",
      "", 
      "bd24bdes11019@iith.ac.in", 
      "coordinator"
    ],
    [
      "Arnav Govind",
      "",
      "me23btech11009@iith.ac.in",
      "coordinator"
    ],
    [
      "Hemika Dipa",
      "",
      "co24btech11005@iith.ac.in",
      "coordinator"
    ],
    [
      "Sunny",
      "",
      "bt23btech11024@iith.ac.in",
      "coordinator"
    ],
    [
      "Sharanmegha",
      "",
      "co24btech11002@iith.ac.in",
      "coordinator"
    ]

  ],
  Web: [
    [
      "Praneeth",
      "+91-9390223741",
      "cs23btech11048@iith.ac.in",
      "head",
    ],
    [
      "Sanjana Gona",
      "",
      "cs23btech11019@iith.ac.in",
      "coordinator",
    ],
    [
      "Sathwik Reddy",
      "",
      "es23btech11020@iith.ac.in",
      "coordinator",
    ],
    [
      "Jagadeesh M",
      "+91-9059426878",
      "cs24btech11042@iith.ac.in",
      "coordinator",
    ],
    [
      "Rithvik Jami",
      "+91-9063230680",
      "cs23btech11022@iith.ac.in",
      "coordinator",
    ],
  ],
  ICT: [
    ["Bhargavi", "+91-9949025448", "ms23mtech11021@iith.ac.in", "head"],
    [
      "Aaron A Anish",
      "",
      "cs24btech11002@iith.ac.in",
      "coordinator",
    ],
    [
      "Sreekari",
      "",
      "es24btech11025@iith.ac.in",
      "coordinator",
    ],
    [
      "Pranathi",
      "",
      "",
      "coordinator",
    ],
    [
      "Samarth",
      "",
      "",
      "coordinator",
    ],
  ],
  Events: [
    ["Karthik", "+91-8861183682", "co23btech11014@iith.ac.in", "head"],
    ["Sateeshwar", "+91-9391270503", "ce23btech11031@iith.ac.in", "head"],

    [
      "Abhinaba Das",
      "",
      "ic24btech11001@iith.ac.in",
      "coordinator",
    ],
    [
      "Dhiraj Baid",
      "",
      "ic24btech11006@iith.ac.in",
      "coordinator",
    ],
    [
      "Jayanth Ram",
      "",
      "me24btech11049@iith.ac.in",
      "coordinator",
    ],
    ["Soham Dandekar", "", "es24btech11032@iith.ac.in", "coordinator"],
    [
      "Surya Teja",
      "",
      "es24btech11038@iith.ac.in",
      "coordinator",
    ],
    [
      "Viraj Rajpure",
      "",
      "ic24btech11020@iith.ac.in",
      "coordinator",
    ],
    [
      "Yash",
      "",
      "ic24btech11025@iith.ac.in",
      "coordinator"
    ],
    [
      "Neel Patel",
      "",
      "ms24btech11024@iith.ac.in",
      "coordinator"
    ],
    [
      "Shresth Kumar",
      "",
      "me24btech11056@iith.ac.in",
      "coordinator"
    ],
    [
      "Subhasis Basa",
      "",
      "ic24btech11022@iith.ac.in",
      "coordinator"
    ],
    [
      "Abhiram R",
      "",
      "ch24btech11002@iith.ac.in",
      "coordinator"
    ],
    [
      "Sri Sai Sidhu",
      "",
      "cebtech11024@iith.ac.in",
      "coordinator"
    ],
    [
      "Arun",
      "",
      "",
      "coordinator"
    ]
  ],
  Logistics:[
    [
      "Hanokk",
      "8885211202",
      "co23btech11025@iith.ac.in",
      "Head"
    ],
    [
      "K Prashanth",
      "",
      "",
      "coordinator"
    ],
    [
      "P Pranavi",
      "",
      "co24btech11018@iith.ac.in",
      "coordinator"
    ],
    [
      "Kalki Survan",
      "",
      "es24btech11011@iith.ac.in",
      "coordinator"
    ],
    [
      "Sai Teja",
      "",
      "es23btech11021@iith.ac.in",
      "coordinator"
    ],
    [
      "Manoj Kumar",
      "",
      "ms23btech1107@iith.ac.in",
      "coordinator"
    ],
    [
      "Aryan Dake",
      "",
      "ce24btech11009@iith.ac.in",
      "coordinator"
    ]
  ],
};

const teamTitles = {
  PR: "Public Relations & Networking Team",
  Design: "Design Team",
  Web: "Web Development Team",
  ICT: "Interview & Hosting Team",
  Edit: "Editorial Team",
  Events: "Multimedia and Events Team",
  Logistics: "Logistics Team",
};

function Media() {
  return (
    <div className="my-8">
      <h2 className="lg:text-4xl text-3xl font-bold text-center  lg:text-left">
        Media & Public Relations Secretary
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
        <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
          <h4 className=" text-p">Media & Public Relations Secretary</h4>
          <h3 className="lg:text-2xl text-xl font-semibold ">Ajith Reddy</h3>
          <address className="pt-3">
            <h4 className="lg:text-xl text-lg font-semibold">+91-6303099673</h4>
            <a
              href="mailto:general_secy_1@gymkhana.iith.ac.in"
              className=" lg:text-xl text-[1rem]"
            >
              media_secy@gymkhana.iith.ac.in
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
            <>
              <h3 className="font-semibold text-3xl mt-5">{teamTitles[key]}</h3>
              <div className="flex flex-wrap gap-6 flex-col md:flex-row">
                {info.map((member) => {
                  return (
                    <TCard
                      name={member[0]}
                      mobile={member[1]}
                      email={member[2]}
                      position={member[3]}
                    />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Media;
