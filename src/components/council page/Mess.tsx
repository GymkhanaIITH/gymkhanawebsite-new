import React from "react";
import TCard from "./teamCard";

const teams = {
  "Inspection Team": [
    ["G Bhanu Ganesh", "9030435668", "ee21resch11010@iith.ac.in", "EE21RESCH11010"],
    ["GAURAB PATNAIK", "8455066769", "gs24mtech11001@iith.ac.in", "GS24MTECH11001"],
    ["K TULASI AKSHY KUMAR", "9989579441", "me24mtech11019@iith.ac.in", "ME24MTECH11019"],
    ["Krutideepa Rout", "9348454154", "bt24resch11008@iith.ac.in", "Bt24resch11008"],
    ["Meet Gor", "9427904467", "id21resch11018@iith.ac.in", "ID21RESCH11018"],
    ["Nimisha Tripathi", "8081603625", "bt23resch12002@iith.ac.in", "Bt23resch12002"],
    ["Prasanth G", "8012315072", "ch24mtech14006@iith.ac.in", "CH24MTECH14006"],
    ["SAISHUBHAM LAISETTI", "6300654096", "cs24mtech12015@iith.ac.in", "CS24MTECH12015"],
    ["Sanidhya Jain", "6269176354", "op24mtech11006@iith.ac.in", "Op24mtech11006"],
    ["Siddharth Jain", "8460455625", "cs23resch11005@iith.ac.in", "CS23RESCH11005"],
    ["Ujjwal Sharma", "8077014357", "la23resch11009@iith.ac.in", "LA23RESCH11009"],
    ["SUMITRO DEY", "7003229594", "id23resch11014@iith.ac.in", "id23resch11014"],
    ["Sai Charan G", "8309900474", "ch24btech11011@iith.ac.in", "Ch24BTECH11011"],
    ["Jatavath Ajay", "6304459285", "ai23btech11011@iith.ac.in", "ai23btech11011"],
    ["Ankur Kalyan", "8708755352", "ms23btech11005@iith.ac.in", "ms23btech11005"],
    ["Sammeta Saipoorna", "6301503053", "ee23btech11055@iith.ac.in", "ee23btech11055"],
    ["Parvez", "8341765885", "cs22btech11052@iith.ac.in", "cs22btech11052"],
    ["Soumik Kumar Basu", "9163784761", "cs21resch11004@iith.ac.in", "cs21resch11004"],
    ["Apparao Garaga", "7396401111", "ch24btech11010@iith.ac.in", "ch24btech11010"],
    ["Rahul Porika", "6300421678", "bt24btech11016@iith.ac.in", "BT24BTECH11016"],
    ["Jyothish J", "7012228022", "me24btech11029@iith.ac.in", "me24btech11029"],
    ["Pabbuleti Venkata Charan Teja", "9100637422", "ai24btech11022@iith.ac.in", "AI24BTECH11022"],
    ["TANUSH SRI SAI PETLA", "8797740704", "ai24btech11034@iith.ac.in", "AI24BTECH11034"],
    ["Tanish Reddy", "9440725957", "ch22btech11031@iith.ac.in", "Ch22btech11031"],
    ["Shravya Kantayapalam", "7670918911", "ee23btech11030@iith.ac.in", "ee23btech11030"],
    ["Shashank", "9347974643", "ma24btech11010@iith.ac.in", "ma24btech11010"],
    ["Chandrahas", "7093309555", "cs22btech11027@iith.ac.in", "CS22BTECH11027"],
    ["Samith prakash", "6304858037", "ch24btech11040@iith.ac.in", "Ch24btech11040"],
    ["Shreyas Kulkarni", "9356662796", "me24btech11037@iith.ac.in", "ME24BTECH11037"],
    ["Meda Ashok Kumar", "9392963679", "es23btech11027@iith.ac.in", "es23btech11027"],
  ],
  "Menu Team": [
    ["Kirti Garg", "9711718888", "bt23resch11005@iith.ac.in", "bt23resch11005"],
    ["Siddharth Jain", "8460455625", "cs23resch11005@iith.ac.in", "CS23RESCH11005"],
    ["Shashank", "9347974643", "ma24btech11010@iith.ac.in", "ma24btech11010"],
    ["Shreyas Kulkarni", "9356662796", "me24btech11037@iith.ac.in", "ME24BTECH11037"],
    ["Mohana Priya S", "7358444133", "ch23resch11005@iith.ac.in", "Ch23resch11005"],
    ["Subham Bhattacharjee", "6202417870", "cs23resch01002@iith.ac.in", "CS23RESCH01002"],
    ["Vuddagiri Rajesh Guptha", "9059876323", "ic24btech11024@iith.ac.in", "ic24btech11024"],
    ["Sahasra Garuvandula", "6301313736", "me24btech11050@iith.ac.in", "me24btech11050"],
    ["Yashwanth Narra", "8341137485", "co24btech11016@iith.ac.in", "CO24BTECH11016"],
    ["Satya Chopra", "9819026005", "ch24btech11033@iith.ac.in", "ch24btech11033"],
  ],
  "Technical Team": [
    ["J D Chandana", "9591546089", "ai23btech11008@iith.ac.in", "AI23BTECH11008"],
  ],
};

function Mess() {
  return (
    <div className="my-8">
      <h2 className="lg:text-4xl text-3xl font-bold text-center  lg:text-left">
        Mess Secretary
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
        <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl ">
          <h4 className=" text-p">Mess Secretary </h4>
          <h3 className="lg:text-2xl text-xl font-semibold ">N Pawan Surya</h3>
          <address className="pt-3">
            <h4 className="lg:text-xl text-lg font-semibold">+91 9573777400</h4>
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
        <h2 className="mt-9 lg:text-4xl text-3xl font-bold text-center  lg:text-left">
          Team
        </h2>
        {Object.keys(teams).map((key, index) => {
          const info = teams[key];
          return (
            <div className="mt-2">
              <h3 className="font-semibold text-3xl mt-5">{key}</h3>
              <div className="flex flex-wrap [&>div]:flex-shrink-0   md:[&>div]:basis-[19.75rem] xs:[&>div]:basis-[4.75rem] flex-col md:flex-row gap-2">
                {info.map((member) => {
                  return (
                    <TCard
                      name={member[0]}
                      mobile={"+91 " + member[1]}
                      email={member[2]}
                      position={member[3]}
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
