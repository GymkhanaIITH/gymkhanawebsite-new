import React, { useState, useEffect } from "react";
import TCard from "./teamCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface club {
  name: string;
  desc: string;
}
const clubs: club[] = [
  {
    name: "aero",
    desc: "Want some thrilling flying stuff? Fascinated with flying things? Wanna blow your mind with the flow of wind? Come join us for an exciting experience! Aeromodelling is the art of designing and getting the design to build some awe-inspiring stuff to meet the skies. At IITH; we aviation enthusiasts fuel innovation to re-invent “flying” like it has never been before. Let’s re-energise aviation.",
  },
  {
    name: "cepheid",
    desc: "The Astronomy & Astrophysics Club of IIT Hyderabad. Here at Cepheid we try to bring awareness in the field of Astronomy and Astrophysics.We conduct various Events, Talks and other activities as a group.",
  },
  {
    name: "elektronica",
    desc: "Elektronika is the de facto electronics, artificial intelligence andmachine learning club of IIT Hyderabad.This is the platform for our students to dream innovative practical projects and achieve them. We strive to create interest in the students for electronics..",
  },
  {
    name: "kludge",
    desc: "Welcome to Kludge, the information security and networking club of IIT Hyderabad - Our mission is to provide a forum for students to explore and deepen their understanding of the fields of information security and networking. Through a variety of events, workshops, and talks, we aim to foster a community of learners and practitioners who are passionate about these rapidly evolving fields. The world of information security and networking can be daunting, but here at Kludge, we’re here to help.",
  },
  {
    name: "infero",
    desc: "Infero is the Competitive Programming Club of IIT Hyderabad. We are a bunch who take care of everyone’s problems in our own nice geeky way, we think logically, we talk reasonably but well, we are too clumsy and lazy to act, our programs do it instead ;)",
  },
  {
    name: "lambda",
    desc: "We are the software development club of IITH. We build solutions and help others to do the same. Contributing to a quality piece of open source software can be a great learning experience. Keeping this in mind Hacktoberfest is conducted every year. It is open to everyone and is aimed to encourage involvement in the open source community.",
  },
  {
    name: "epoch",
    desc: "Epoch is the AI & Machine Learning of IIT Hyderabad, we conduct events and workshops, hold lectures and talks, and even host Kaggle competitions and hackathons. We create a platform that allows students to gain assistance and mentorship to enhance their AI & ML skills. Our aim is to propagate the enthusiasm for AI & ML in the institute and especially amongst freshmen. The secret of getting ahead is getting started and we aim to provide every student with the right start.",
  },
  {
    name: "prakriti",
    desc: "Prakriti is the Nature Club of IIT Hyderabad. Prakriti is be a place where anyone interested in Nature, and willing to stay engaged, should be able to contribute with minimal procedural or structural hindrances.I",
  },
  {
    name: "robotix",
    desc: "Since the first appearance of a robot in a movie in 1927, robots have intrigued us through innumerable appearances in fictional stories in the media, be it the print or the film. The Robotix club IIT Hyderabad is a place where some of the most hardworking individuals strive to achieve perfection in the field of Robotics. The club came up in 2009 and since its formation, it has come a long way in terms of development and technology.",
  },
  {
    name: "torque",
    desc: "Torque, a club started by automobile aficionados, is aimed to nourish the passion of automobile enthusiasts. The purpose of this club is to enhance the mechanical knowledge amongst student enthusiasts at IITH. We aim to motivate the students, to coordinate and participate in co-curricular Activities along with their regular Academics which helps them to be more competitive in the era of industrialisation.",
  },
  {
    name: "glitch",
    desc: "Glitch is the official video game club of IIT Hyderabad.",
  },
];

const clubLogos = {
  aero: "https://scitech-iith.netlify.app/images/aero_logo.png",
  cepheid: "https://scitech-iith.netlify.app/images/cepheid.jpg",
  elektronica: "https://scitech-iith.netlify.app/images/elektronica.png",
  kludge: "https://scitech-iith.netlify.app/images/kludge.jpeg",
  infero: "https://scitech-iith.netlify.app/images/infero_logo.png",
  lambda: "https://scitech-iith.netlify.app/images/lambda_logo.png",
  prakriti: "https://scitech-iith.netlify.app/images/prakriti_logo.png",
  robotix: "https://scitech-iith.netlify.app/images/robotix_logo.png",
  torque: "https://scitech-iith.netlify.app/images/torque_logo.png",
  glitch:
    "https://static-cdn.jtvnw.net/jtv_user_pictures/e91b853c-5709-4786-afc3-01e956dfbea5-profile_image-300x300.png",
  epoch: "https://avatars.githubusercontent.com/u/55585020?s=200&v=4"
};

const coords = {
  cepheid: [
    {
      name: "Kunj Panchal",
      roll: "EP21BTECH11017",
      position: "Overall Head",
    },
    {
      name: "Aman Bhasin",
      roll: "ES21BTECH11006",
      position: "Events Head",
    },
    {
      name: "Abhijit Sambhaji Kasle",
      roll: "EP21BTECH11002",
      position: "Media & PR Head",
    },
    {
      name: "Pragya Yadav",
      roll: "CH21BTECH11023",
      position: "Inbound Head",
    },
  ],
  aero: [
    {
      name: "Chinmay Kushwaha",
      roll: "CH21BTECH11010",
      position: "Head",
    },
    {
      name: "Mohammed Areeb Hussain",
      roll: "ME21BTECH11033",
      position: "Head",
    },
    {
      name: "Baratam Sai Krishna Girish",
      roll: "EE21BTECH11007",
      position: "Head",
    },
  ],
  infero: [
    {
      name: "Aayush Kumar",
      roll: "CO21BTECH11001",
      position: "Head",
    },
    {
      name: "Ankit Saha",
      roll: "AI21BTECH11004",
      position: "Head",
    },
  ],
  lambda: [
    {
      name: "Kushagra Gupta",
      roll: "CS21BTECH11033",
      position: "Overall Head",
    },
    {
      name: "Kartheek Sriram Tammana",
      roll: "CS21BTECH11028",
      position: "Overall Head",
    },
    {
      name: "Jaswanth Beere",
      roll: "BM21BTECH11007",
      position: "Overall Head",
    },
    {
      name: "Varun Gupta",
      roll: "CS21BTECH11060",
      position: "App Development Head",
    },
  ],
  elektronica: [
    {
      name: "Boora Jagadeep",
      roll: "BM21BTECH11008",
      position: "Head",
    },
    {
      name: "A P Vaideeswaran",
      roll: "EE21BTECH11001",
      position: "Head",
    },
    {
      name: "Sathwik Banala",
      roll: "EE21BTECH11049",
      position: "Head",
    },
  ],
  robotix: [
    {
      name: "Rudransh Mishra",
      roll: "AI21BTECH11025",
      position: "Overall Head",
    },
    {
      name: "Harshal Verma",
      roll: "AI21MTECH02003",
      position: "Overall Head",
    },
    {
      name: "Pratik Nikam",
      roll: "EE21BTECH11037",
      position: "Embedded Systems and Electronics Head",
    },
    {
      name: "Rajapu Jayachandra Naidu",
      roll: "CS21BTECH11050",
      position: "Software Head",
    },
    {
      name: "Ayush Kumar Singh",
      roll: "AI20BTECH11028",
      position: "Machine Learning Head",
    },
    {
      name: "Mehul Srivastava",
      roll: "ME21BTECH11032",
      position: "Mechanical Modelling Head",
    },
  ],
  torque: [
    {
      name: "Pruthvi Raj Asampalli ",
      roll: "ES20BTECH11005",
      position: "Head",
    },
    {
      name: "Bevara Rohit",
      roll: "EE21BTECH11009",
      position: "Head",
    },
    {
      name: "Malakala Chaitanya",
      roll: "ME21BTECH11030",
      position: "Head",
    },
  ],
  epoch: [
    {
      name: "Tejadhith Sankar",
      roll: "EE21BTECH11055",
      position: "Overall Head",
    },
    {
      name: "Arvind Roshaan",
      roll: "AI21MTECH12004",
      position: "Overall Head",
    },
    {
      name: "Vaishnavi W",
      roll: "AI20BTECH11025",
      position: "Computer Vision Head",
    },
    {
      name: "Shreykumar Dineshchandra Satapara",
      roll: "AI22MTECH02003 ",
      position: "Natural Langauage Processing Head",
    },
    {
      name: "Mannem Charan",
      roll: "AI21BTECH11019",
      position: "Reinforcement Learning Head",
    },
    {
      name: "Donal Loitam",
      roll: "AI21BTECH11009",
      position: "Data Science and Data Mining Head",
    },
    {
      name: "Prajwaldeep Kamble",
      roll: "MA20BTECH11013",
      position: "Data Science and Data Mining Head",
    },
    
  ],
  glitch: [
    {
      name: "Tatparya Kshatriya",
      roll: "MS21BTECH11029",
      position: "Overall Head",
    },
    {
      name: "Pranav Balasubramanian",
      roll: "AI21BTECH11023",
      position: "Esports Head",
    },
  ],
  kludge: [
    {
      name: "K Saravanan",
      roll: "CS22MTECH12007",
      position: "Head",
    },
    {
      name: "Abhinav Yadav",
      roll: "CS21BTECH11002",
      position: "Head",
    },
    {
      name: "Rajiv Shailesh Chitale",
      roll: "CS21BTECH11051",
      position: "Head",
    },
  ],

  prakriti: [
    {
      name: "Yapamanu Ujwal Sai Simha",
      roll: "ME20BTECH11056",
      position: "Overall Head",
    },
    {
      name: "Pindi Visishta",
      roll: "CE21BTECH11032",
      position: "Events Head",
    },
    {
      name: "Katherapaka Nikhil",
      roll: "EE22BTECH11028",
      position: "Projects Head",
    },
    {
      name: "Vighnesh Sreepathi",
      roll: "IC21BTECH11009",
      position: "Media and PR Head",
    },
  ],
};

function Scitech() {
  const [club, setClub] = useState("aero");
  const [desc, setDesc] = useState(clubs[0].desc);

  useEffect(() => {
    console.log({ club });
    let description = clubs.filter((el) => el.name === club);
    setDesc(description[0].desc);
  }, [club]);
  return (
    <div className="my-8">
      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center lg:text-left">
          Science and Technology Secretary
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className=" text-p">Science and Technology Secretary </h4>
            <h3 className="lg:text-2xl text-xl font-semibold">
              Bapatu Manoj Kumar Reddy
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">
                +91 7569521250
              </h4>
              <a
                href="mailto:scitech_secy@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                scitech_secy@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
        </div>
        <h2 className="hidden lg:block lg:text-4xl text-4xl font-bold text-center lg:text-left mt-[2rem] mb-[1rem]">
          Clubs
        </h2>
        <div className="lg:grid lg:grid-cols-5 pt-4 hidden z-0 relative">
          <ul
            className={`lg:col-span-1 hidden text-2xl lg:flex lg:flex-col gap-3 [&>li]:cursor-pointer bg-[#2F2F2F] p-8 flex-col justify-center items-start rounded-xl`}
          >
            <li
              className={`px-4 py-2 rounded-md ${club === "aero" ? "bg-[#B74224]" : "text-opacity-40"}`}
              onClick={() => {
                setClub("aero");
              }}
            >
              Aero Club
            </li>
            <li
              className={`px-4 py-2 rounded-md ${
                club === "cepheid" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
              onClick={() => {
                setClub("cepheid");
              }}
            >
              Cepheid
            </li>
            <li
              className={`px-4 py-2 rounded-md ${
                club === "elektronica" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
              onClick={() => {
                setClub("elektronica");
              }}
            >
              Elektronica
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "kludge" ? "bg-[#B74224]" : "text-opacity-40"}`}
              onClick={() => {
                setClub("kludge");
              }}
            >
              Kludge
            </li>

            <li
              className={`px-4 py-2 rounded-md ${club === "infero" ? "bg-[#B74224]" : "text-opacity-40"}`}
              onClick={() => {
                setClub("infero");
              }}
            >
              Infero
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "lambda" ? "bg-[#B74224]" : "text-opacity-40"}`}
              onClick={() => {
                setClub("lambda");
              }}
            >
              Lambda
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "epoch" ? "bg-[#B74224]" : "text-opacity-40"}`}
              onClick={() => {
                setClub("epoch");
              }}
            >
              Epoch
            </li>
            <li
              className={`px-4 py-2 rounded-md ${
                club === "prakriti" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
              onClick={() => {
                setClub("prakriti");
              }}
            >
              Prakriti
            </li>
            <li
              className={`px-4 py-2 rounded-md ${
                club === "robotix" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
              onClick={() => {
                setClub("robotix");
              }}
            >
              Robotix
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "torque" ? "bg-[#B74224]" : "text-opacity-40"}`}
              onClick={() => {
                setClub("torque");
              }}
            >
              Torque
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "glitch" ? "bg-[#B74224]" : "text-opacity-40"}`}
              onClick={() => {
                setClub("glitch");
              }}
            >
              Glitch
            </li>
          </ul>
          <div className="lg:col-span-4 col-span-6 grid grid-cols-6 gap-6 lg:gap-[2rem] items-center relative">
            <div className="lg:col-span-4 lg:text-[18px] col-span-full lg:row-span-full m-8">
              <p className="mt-8 justify-self-start">{desc}</p>
              <div className="grid grid-cols-2 gap-2">
                {coords[club]?.map((coord) => {
                  return (
                    <TCard
                      name={coord.name}
                      mobile={""}
                      position={coord.position}
                      email={coord.roll.toLowerCase() + "@iith.ac.in"}
                      activePosition="Coordinator"
                    />
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-2 pointer-events-none h-full col-span-full lg:row-span-full relative flex justify-center items-center">
              <img
                className="w-full object-contain"
                src={clubLogos[club]}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

function Card({ title, imgUrl, desc }) {
  return (
    <div className="">
      <div className="">
        <h2 className="">{title}</h2>
      </div>
      <div className="">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Scitech;
