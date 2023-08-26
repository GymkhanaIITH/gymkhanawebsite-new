import React from "react";
import TCard from "./teamCard";

const teams = {
  "Mess Coordinator": [["Chaitanya Reddy", "cs20resch11001@iith.ac.in"]],
  "Daily Inspection Team": [
    ["Srishti Banarjee", "bo21resch11006@iith.ac.in"],
    ["Sai Sujith Reddy Sandhi", "ee21btech11048@iith.ac.in"],
    ["Yapamanu Ujwa Sai Simha", "me20btech11056@iith.ac.in"],
    ["Jas Chaudhary", "bo21mtech14004@iith.ac.in"],
    ["Kasi Dhanvi", "me21btech11025@iith.ac.in"],
    ["Arkajyoti Jha", "me20resch11001@iith.ac.in"],
    ["Kshitiz Kumar", "ai22mtech02002@iith.ac.in"],
    ["Nabeel Mohammed P T", "ch20btech11024@iith.ac.in"],
    ["Gopika K T", "ce19btech11004@iith.ac.in"],
    ["P Padmini", "ce19resch11009@iith.ac.in"],
    ["Uppulapu Manikanta", "bt21btech11005@iith.ac.in"],
  ],
  "Milk Inspection Team": [
    ["Tejaswi S", "es20tech11027@iith.ac.in"],
    ["Chiranjeevi", "ms20btech11016@iith.ac.in"],
    ["Vaibhav Racinhalwar", "mi21mtech14004@iith.ac.in"],
    ["Harshal Verma", "ai21mtech02003@iith.ac.in"],
    ["Akshay Pudari", "ce19btech11038@iith.ac.in"],
    ["Nethish Gorantla", "ce20btech11012@iith.ac.in"],
    ["Thumu Johar Reddy", "ce19btech11011@iith.ac.in"],
    ["Manikanta Vallepu", "ai20btech11014@iith.ac.in"],
  ],
  "Mess Hygiene Team": [
    ["Sankalp Deshmukh", "ce20btech11034@iith.ac.in"],
    ["Akash", "cy21mscst11041@iith.ac.in"],
    ["Surya Teja Cheruku", "ce20btech11007@iith.ac.in"],
    ["Surya Sudeep", "me20btech11013@iith.ac.in"],
    ["Diptasri Ghosh", "ee21mtech14004@iith.ac.in"],
    ["Anuraag Manda", "ee20btech11027@iith.ac.in"],
    ["Harsha S R", "id21resch11022@iith.ac.in.in"],
    ["Rishitha Surisetty", "ch21btech11030@iith.ac.in"],
    ["Vijayakrishna", "ce20btech11035@iith.ac.in"],
    ["Ashutosh", "ce21btech11018@iith.ac.in"],
    ["Vamsi Preetam", "cs20btech11058@iith.ac.in"],
  ],
  "Menu Preparation Team": [
    ["Harish Madireddi", "ee21btech11047@iith.ac.in"],
    ["Mohit", "cy21mscst11040@iith.ac.in"],
    ["Suraj Telugu", "cs20btech11050@iith.ac.in"],
    ["K Satya Sandesh", "ma19btech11008@iith.ac.in"],
    ["Karri Trinadha Rao", "ee22resch01003@iith.ac.in"],
    ["Anuj Sharma", "ew21mtech14004@iith.ac.in"],
  ],
  "Mess Technical Team": [
    ["Murugappan N", "ch21mtech14001@iith.ac.in"],
    ["Uttej", "ms21btech11016@iith.ac.in"],
    ["Siddharth Reddy", "me21btech11015@iith.ac.in"],
    ["B Vishwajith Reddy", "ee21btech11012@iith.ac.in"],
  ],
  "Mess Grievance Cell": [
    ["Adamya Dubey", "cy21mscst11011@iith.ac.in"],
    ["Ajay Bachiphale", "ew21mtech11002@iith.ac.in"],
    ["Uday Kiran Timmala", "ce20btech11042@iith.ac.in"],
    ["Dhatri Nanda", "ai20btech11002@iith.ac.in"],
  ],
};

function Mess() {
  return (
    <div>
      <h2 className="lg:text-4xl text-3xl font-bold text-center text-black lg:text-left">
        Mess Secretary
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
        <div className="bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g">
          <h4 className=" text-p">Mess Secretary </h4>
          <h3 className="lg:text-2xl text-xl font-semibold text-black">
          Rishitha Surisetty
          </h3>
          <address className="pt-3">
            <h4 className="lg:text-xl text-lg font-semibold">+91 8074801959</h4>
            <a
              href="mailto:mess_secya@gymkhana.iith.ac.in"
              className=" lg:text-xl text-[1rem]"
            >
              mess_secya@gymkhana.iith.ac.in
            </a>
          </address>
        </div>
      </div>
      <div className="mx-5">
        <h2 className="mt-9 lg:text-4xl text-3xl font-bold text-center text-black lg:text-left">
          Team
        </h2>
        {Object.keys(teams).map((key, index) => {
          const info = teams[key];
          return (
            <div className="mt-2">
              <h3 className="font-semibold text-3xl mt-5">{key}</h3>
              <div className="flex flex-wrap [&>div]:flex-shrink-0   md:[&>div]:basis-[19.75rem] xs:[&>div]:basis-[4.75rem] flex-col md:flex-row ">
                {info.map((member) => {
                  return (
                    <TCard
                      name={member[0]}
                      mobile={member[1]}
                      email={""}
                      position={""}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mess;
