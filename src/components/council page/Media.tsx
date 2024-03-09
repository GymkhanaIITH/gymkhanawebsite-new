import React from "react";
import TCard from "./teamCard";
const PR = [
  {
    position: "head",
    name: "Kuntal Suman",
    mobile: " +91-8578001808",
    mail: "ce21btech11022@iith.ac.in",
  },
  {
    position: "coordinator",
    name: "Nakul Garg",
    mobile: " +91-9354662767",
    mail: " me21btech11035@iith.ac.in",
  },
  {
    position: "coordinator",
    name: "Laxmi Sreya",
    mobile: "  +91-9391322582",
    mail: " ce21btech11038@iith.ac.in",
  },
  {
    position: "coordinator",
    name: "Hadi Afnan",
    mobile: " +91-7994344759",
    mail: "ms20btech11009@iith.ac.in",
  },
  {
    position: "coordinator",
    name: "Kartik Katekar",
    mobile: " +91-7083797250",
    mail: "me21btech11024@iith.ac.in",
  },
];
const Des = [];
const Content = [];
const Web = [];
const Int = [];
const Events = [];
const Multimedia=[];

const teams = {
  PR: [
    ["Diva Jaiwar", "+91-8319556225", "me21btech11014@iith.ac.in", "head"],
    [
      "Tanmay Bhandari",
      "+91-9356488010",
      "me21btech11009@iith.ac.in",
      "coordinator",
    ],
    [
      "JP Kanishka Prasad",
      "+91-8121894659",
      "ch22btech11015@iith.ac.in",
      "coordinator",
    ],
    [
      "Dhruv Parashar",
      "+91-9958461340",
      "ee22btech11019@iith.ac.in",
      "coordinator",
    ],
    [
      "Devansh Agrawal",
      "+91-9667236662",
      "es22btech11010@iith.ac.in",
      "coordinator",
    ],
  ],
  Design: [
    [
      "Gatikrushna Mohapatra",
      "+91-7205869973",
      "bd21bdes11008@iith.ac.in",
      "head",
    ],
    [
      "Aadya Marathe",
      "+91-7045314538",
      "bd21bdes11001@iith.ac.in",
      "coordinator",
    ],
    [
      "Jalaj karn",
      "+91-8757736693",
      "ce22btech11024@iith.ac.in",
      "coordinator",
    ],
    [
      "Radhika Bondre",
      "+91-9359974673",
      "bd22bdes11013@iith.ac.in",
      "coordinator",
    ],
    [
      "N Tamaswi Tania",
      "+91-7780450062",
      "me20btech11032@iith.ac.in",
      "coordinator",
    ],
  ],
  Content: [
    ["Mohnish Deshmukh", "+91-9619256058", "me21btech11034@iith.ac.in", "head"],
    [
      "Rayani Venkat Sai Rithvik",
      "+91-9440518336",
      "ee21btech11043@iith.ac.in",
      "coordinator",
    ],
    [
      "Devansh Jain",
      "+91-7339956844",
      "ee22btech11018@iith.ac.in",
      "coordinator",
    ],
    ["Haritha.R", "+91-9360281632", "ai20btech11010@iith.ac.in", "coordinator"],
  ],
  Web: [
    [
      "Sandhi Sai Sujith Reddy ",
      "+91-9391190679",
      "ee21btech11048@iith.ac.in",
      "head",
    ],
    [
      "Kilaru Sai Manasa Veena",
      "+91-9346630094",
      "ee21btech11031@iith.ac.in",
      "coordinator",
    ],
    [
      "Mohamed Kaif D",
      "+91-8148420484",
      "ic22btech11005@iith.ac.in",
      "coordinator",
    ],
    [
      "Sadineni Abhinay",
      "+91-9441370274",
      "cs21btech11055@iith.ac.in",
      "coordinator",
    ],
    [
      "Shambu Kavir",
      "+91-7569581011",
      "cs20btech11045@iith.ac.in",
      "coordinator",
    ],
  ],
  ICT: [
    ["Sneha Bhalerao", "+91-9820276906", "bm22mtech11001@iith.ac.in", "head"],
    [
      "Madhurima ch",
      "+91-8297260216",
      "ch22btech11010@iith.ac.in",
      "coordinator",
    ],
    [
      "Arin Aggarwal",
      "+91-7087850215",
      "ma22btech11006@iith.ac.in",
      "coordinator",
    ],
    [
      "Bogireddy Vishnu Vardhan Reddy ",
      "+91-9550860063",
      "me22btech11017@iith.ac.in",
      "coordinator",
    ],
    [
      "Mohammed Ayan",
      "+91-6260687477",
      "ch22btech11022@iith.ac.in",
      "coordinator",
    ],
  ],
  Events: [
    ["Garv Sachdeva", "+91-9571678719", "ep21btech11012@iith.ac.in", "head"],
    ["Pundi Bindusree", "+91-9908728937", "cs21btech11048@iith.ac.in", "head"],

    [
      "Vadthya Ram Charan",
      "+91-9666997468",
      "ch22btech11036@iith.ac.in",
      "coordinator",
    ],
    [
      "Y Adarsh Reddy ",
      "+91-6361325605",
      "ch22btech11040@iith.ac.in",
      "coordinator",
    ],
    [
      "M Prince Akshay S ",
      "+91-9392864275",
      "ma22btech11012@iith.ac.in",
      "coordinator",
    ],
    ["Arjun", "+91-9398666340", "ic22btech11007@iith.ac.in", "coordinator"],
    [
      "Ashok Chaudhari",
      "+91-7720032507",
      "ch22btech11009@iith.ac.in",
      "coordinator",
    ],
    [
      "E Saikumar",
      "+91-7382678737",
      "ms22btech11012@iith.ac.in",
      "coordinator",
    ],
    [
      "Pritam",
      "91 76027 90672",
      "la23mh11006@iith.ac.in",
      "coordinator"
    ],
    [
      "Rohan Seth",
      "+91 88975 64757",
      "op23mtech11002@iith.ac.in",
      "coordinator"
    ]
  ],
};

const teamTitles = {
  PR: "Public Relations & Networking Team",
  Design: "Design Team",
  Web: "Web Development Team",
  ICT: "Interview & Hosting Team",
  Content: "Content Team",
  Events: "Multimedia and Events Team",
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
          <h3 className="lg:text-2xl text-xl font-semibold ">
            Anand Sharma
          </h3>
          <address className="pt-3">
            <h4 className="lg:text-xl text-lg font-semibold">+91 9111280778</h4>
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
