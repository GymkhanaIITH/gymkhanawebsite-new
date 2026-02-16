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
    desc: "Aeronautics and Drone Designing Club of IIT Hyderabad, is a community dedicated to explore the world of planes and drones. We build cool stuff in our projects, organize interesting and engaging events explaining aerodynamics in a simple way and conduct exciting competitions.",
  },
  {
    name: "cepheid",
    desc: "The Astronomy & Astrophysics Club of IIT Hyderabad. Here at Cepheid we try to bring awareness in the field of Astronomy and Astrophysics.We conduct various Events, Talks and other activities as a group.",
  },
  {
    name: "elektronica",
    desc: "Elektronica is the Electronics & Signal Processing club of IIT Hyderabad. Here people interested in electronics & signal processing work together, build projects and learn from one another. We also conduct sessions & contests to spread the knowledge with the rest of the community. We also participate and represent IIT Hyderabad in various other competitions and even Inter IIT Tech Meet.",
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
    desc: "Lambda is the software development club at IIT Hyderabad, focusing on building software, applications, and websites that benefit the entire IITH community. As part of these efforts, we have developed the Main Gate Application, IITH Dashboard, and many others. Whether you're a seasoned coder or a complete beginner, Lambda provides an inclusive environment to grow. Join us to dream, develop, and accomplish extraordinary things with technology.",
  },
  {
    name: "epoch",
    desc: "Epoch is a club at IITH that helps students learn and grow in AI and Data Science. Members can join hands-on sessions, hackathons, and work on projects in areas like Computer Vision, NLP, and more. It's a great place to connect with peers and gain practical experience.",
  },
  // {
  //   name: "prakriti",
  //   desc: "Nature club of IITH. Bringing naturalists together to enjoy, appreciate and be grateful for nature.Club to increase awareness regarding current pressing issues surrounding nature, sustainable technology and real life problem statements surrounding nature",
  // },
  {
    name: "robotix",
    desc: "The Robotix Club at the Indian Institute of Technology Hyderabad (IITH) is a dynamic hub for enthusiasts passionate about robotics, machine learning, electronics, and mechanical modeling. Our club is dedicated to fostering innovation and technical excellence through hands-on projects and collaborative learning. At the Robotix Club, we take pride in our diverse portfolio of cutting-edge projects, ranging from the intricate design and flight of Ornithopters to the advanced engineering of Drones. Our members gain practical experience in integrating machine learning algorithms with robotics, developing sophisticated electronic circuits, and constructing robust mechanical systems.",
  },
  {
    name: "torque",
    desc: "Torque, the automobile club at IIT Hyderabad, is dedicated to fostering the passion of automobile enthusiasts. Our mission is to enhance mechanical knowledge among students. We conduct regular sessions, work on hands-on projects, and participate in competitions. Like other college automobile clubs, we host workshops, collaborate on vehicle design and construction, and engage in industry visits and networking events to provide a comprehensive learning experience.",
  },
  {
    name: "glitch",
    desc: "The esports and game dev club of IITH.",
  },
];

const clubLogos = {
  aero: "/public/images/councils/aero.png",
  cepheid: "https://scitech-iith.netlify.app/images/cepheid.jpg",
  elektronica: "https://scitech-iith.netlify.app/images/elektronica.png",
  kludge: "https://scitech-iith.netlify.app/images/kludge.jpeg",
  infero: "https://scitech-iith.netlify.app/images/infero_logo.png",
  lambda: "/public/images/councils/lambda.png",
  //prakriti: "https://scitech-iith.netlify.app/images/prakriti_logo.png",
  robotix: "https://scitech-iith.netlify.app/images/robotix_logo.png",
  torque: "https://scitech-iith.netlify.app/images/torque_logo.png",
  glitch: "/public/images/councils/glitch.png",
  epoch: "/public/images/councils/epoch.png",
};

const coords = {
  cepheid: [
    {
      name: "Vedant Mokal",
      roll: "EP23BTECH11034",
      position: "Overall Head",
    },
    {
      name: "Sri Devaki Meduri",
      roll: "EP23BTECH11030",
      position: "Astro-Tech Domain Head",
    },
    {
      name: "Arav P",
      roll: "EP23BTECH11003",
      position: "Telescope-ops Domain Head",
    },
    {
      name: "Arpit Suryavanshi",
      roll: "EP24BTECH11005",
      position: "Astroimagery Domain Head",
    },
  ],
  aero: [
    {
      name: "Ameen Aazam",
      roll: "EE23BTECH11006",
      position: "Overall Head",
    },
    {
      name: "Pranav Anil Ingle",
      roll: "ME23BTECH11048",
      position: "Overall Head",
    },
    {
      name: "Naren Karthik T",
      roll: "IC24BTECH11017",
      position: "Overall Head",
    },
  ],
  infero: [
    {
      name: "Muppidi Sai Rajeshwara Siddarth Reddy",
      roll: "MA23BTECH11017",
      position: "Overall Head",
    },
    {
      name: "Chaitanya Nemmani",
      roll: "MA23BTECH11008",
      position: "Overall Head",
    },
  ],
  lambda: [
    {
      name: "Ankush Singh",
      roll: "MA23BTECH11002",
      position: "Overall Head",
    },
    {
      name: "Velvadapu Naga Venkata Ganeswar",
      roll: "MS23BTECH11034",
      position: "Overall Head",
    },
    {
      name: "Pranjal Jayesh Prajapati",
      roll: "CS23BTECH11048",
      position: "Overall Head",
    },
    {
      name: "Abdul Muqeeth",
      roll: "ES23BTECH11028",
      position: "Tech Lead",
    },
  ],
  elektronica: [
    {
      name: "Dhanush",
      roll: "EE23BTECH11015",
      position: "Overall Head",
    },
    {
      name: "Prajwal",
      roll: "EE23BTECH11217",
      position: "Overall Head",
    },
    {
      name: "Venkatesh",
      roll: "EE23BTECH11010",
      position: "Domain Head",
    },
    {
      name: "Arohish",
      roll: "EE23BTECH11009",
      position: "Domain Head",
    },
    {
      name: "Vedamsh",
      roll: "BM23BTECH11015",
      position: "Domain Head",
    },
  ],
  robotix: [
    {
      name: "Aditya Gupta",
      roll: "ME23BTECH11004",
      position: "Overall Head",
    },
    {
      name: "Abhijit Kashyap",
      roll: "BM23BTECH11002",
      position: "Overall Head",
    },
    {
      name: "Pardhu",
      roll: "ME23BTECH11013",
      position: "Overall Head",
    },
    {
      name: "Aryan Gandhi",
      roll: "ME23BTECH11010",
      position: "Overall Head",
    },
    {
      name: "Soumyajit Maji",
      roll: "ME23BTECH11059",
      position: "Overall Head",
    },
    {
      name: "Ethan Bobby Kurien",
      roll: "CE23BTECH11019",
      position: "Overall Head",
    },
  ],
  torque: [
    {
      name: "Raghav",
      roll: "EP23BTECH11020",
      position: "Overall Head",
    },
    {
      name: "Avinash",
      roll: "ME23BTECH11022",
      position: "Technical Head",
    },
    {
      name: "Asik",
      roll: "SM24MTECH14004",
      position: "Technical Head",
    },
  ],
  epoch: [
    {
      name: "Ashwath E",
      roll: "AI23BTECH11001",
      position: "Overall Head",
    },
    {
      name: "Harsh Singh",
      roll: "EP23BTECH11012",
      position: "Overall Head",
    },
    {
      name: "Ankita Sri S P",
      roll: "MA23BTECH11001",
      position: "Tech Lead- Computer Vision",
    },
    {
      name: "Nitesh Gokul",
      roll: "AI23BTECH11006",
      position: "Tech Lead- Reinforcement Learning",
    },
  ],
  glitch: [
    {
      name: "Suchit",
      roll: "AI23BTECH11027",
      position: "Overall Head",
    },
    {
      name: "Sashim",
      roll: "EP23BTECH11026",
      position: "Overall Head",
    },
    {
      name: "Krishna Teja",
      roll: "CS23BTECH11028",
      position: "Overall Head",
    },
  ],
  kludge: [
    {
      name: "Duppalapudi Kamal Koushik",
      roll: "CH23BTECH11016",
      position: "Overall Head",
    },
    {
      name: "Harshil",
      roll: "ES23BTECH11016",
      position: "Overall Head",
    },
    {
      name: "Sathwik Kodamarthi",
      roll: "CS23BTECH11025",
      position: "Overall Head",
    },
  ],
  // prakriti: [
  //   {
  //     name: "Yapamanu Ujwal Sai Simha",
  //     roll: "ME20BTECH11056",
  //     position: "Overall Head",
  //   },
  //   {
  //     name: "Pindi Visishta",
  //     roll: "CE21BTECH11032",
  //     position: "Events Head",
  //   },
  //   {
  //     name: "Katherapaka Nikhil",
  //     roll: "EE22BTECH11028",
  //     position: "Projects Head",
  //   },
  //   {
  //     name: "Vighnesh Sreepathi",
  //     roll: "IC21BTECH11009",
  //     position: "Media and PR Head",
  //   },
  //],
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
            <h3 className="lg:text-2xl text-xl font-semibold">Donavalli Sai Durga Rishi</h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">
                +91 8979797828
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
              className={`px-4 py-2 rounded-md ${club === "aero" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("aero");
              }}
            >
              Aero Club
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "cepheid" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("cepheid");
              }}
            >
              Cepheid
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "elektronica" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("elektronica");
              }}
            >
              Elektronica
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "kludge" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("kludge");
              }}
            >
              Kludge
            </li>

            <li
              className={`px-4 py-2 rounded-md ${club === "infero" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("infero");
              }}
            >
              Infero
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "lambda" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("lambda");
              }}
            >
              Lambda
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "epoch" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("epoch");
              }}
            >
              Epoch
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "prakriti" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("prakriti");
              }}
            >
              Prakriti
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "robotix" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("robotix");
              }}
            >
              Robotix
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "torque" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
              onClick={() => {
                setClub("torque");
              }}
            >
              Torque
            </li>
            <li
              className={`px-4 py-2 rounded-md ${club === "glitch" ? "bg-[#B74224]" : "text-opacity-40"
                }`}
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
