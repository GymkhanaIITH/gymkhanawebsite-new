import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import TCard from "./teamCard";

interface club {
  name: string;
  desc: string;
}
const clubs: club[] = [
  {
    name: "infocus",
    desc: "The photography club of IIT Hyderabad",
  },
  {
    name: "btl",
    desc: "The behind the lens club exists to Foster the appreciation and study of film making. The purpose of our club is to give students the opportunity to approach all aspects of film and film making in a serious, meaningful, and in-depth manner.",
  },
  {
    name: "vibes",
    desc: 'Welcome to VIBES - The music club of IITH! We conduct regular jamming sessions, guitar sessions, vocal sessions etc. to encourage learning new things and having fun. We want to bring out the musician in everyone. Join us if you love to sing, play or write music! Vibes was the winner of the "Best Cultural Club" title in the year 2017-18!',
  },
  {
    name: "shuffle",
    desc: "IIT Hyderabad’s dance club is a lively and vigorous student organization focusing on promoting dance culture in the campus. It offers opportunity for the students to express themselves in different dance categories such as classical or modern and street dances such as hip-hop and break-dancing. A club arranges for weekend classes and dance-offs as well as competitions to create the spirit of teamwork and innovative ideas amongst the dancers.",
  },
  {
    name: "gesture",
    desc: "The Official Art Club of IIT Hyderabad, is a space to create, design and discover oneself in the traditional and modern realms of art and craft. Every year, our team comprises of like-minded people who bring out the best of creativity in themselves for the ultimate betterment of the Gesture. We are deeply passionate about art, and highly encourage people to join the group for any sessions or collaborations. Gesture is a strong platform for artistic talent and exploration.",
  },
  {
    name: "rang",
    desc: "Rang De Manch is the official drama club of IITH which works under the cultural council of IITH. It is a platform where the students can show their extra curricular activities related with acting. It presents a bunch of amazing events round the year from stage and street performances to mimes and comedy acts that entertain the junta thoroughly. The club aims to entertain people and along with that spread messages for the betterment of the society through mimes,street plays etc. Rang De Manch is a home to all the lovers of acting. A plethora of talented individuals who join every year to take forward IITH's rich legacy in dramatics. From writing plays, to direction and performance members get to learn the skills required for each of these jobs.",
  },
  {
    name: "otaku",
    desc: "Otaku is the anime and manga club of IIT Hyderabad. It brings together anime enthusiasts to discuss, watch, and celebrate Japanese animation and pop culture.",
  },
  {
    name: "fashion",
    desc: "The Fashion Club of IIT Hyderabad is dedicated to exploring and showcasing fashion trends, organizing fashion shows, and encouraging students to express their style.",
  },
];

const clubLogos = {
  infocus: "/images/councils/infocus.png",
  vibes:
    "https://res.cloudinary.com/dwsverefw/image/upload/c_fit,h_208,q_29,w_318/v1671964501/media%20council/cultural%20clubs/vibes_nr2iou.png",
  btl: "/images/councils/btl.png",
  rang: "/images/councils/rdm.jpg",
  shuffle: "/images/councils/shuffle.png",
  gesture: "/images/councils/gesture.jpg",
  otaku: "",
  fashion: "",
};

const coords = {
  infocus: [
    {
      name: "Ishwarya A",
      email: "bm23btech11009@iith.ac.in",
      position: "Head",
    },
    {
      name: "Abhiram A",
      email: "ch24btech11002@iith.ac.in",
      position: "Coordinator",
    },
  ],
  btl: [
    {
      name: "B. Venu Naik",
      email: "me22btech11012@iith.ac.in",
      position: "Mentor",
    },
    {
      name: "Gaurav Lamba",
      email: "ic23btech11007@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Karthi Gnana Ezhil",
      email: "ep23btech11016@iith.ac.in",
      position: "Coordinator",
    },
  ],
  shuffle: [
    {
      name: "Harini Kovoor",
      email: "ms22btech11014@iith.ac.in",
      position: "Head",
    },
    {
      name: "Ujjwal Kalra",
      email: "es23btech11038@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "B. Abhivardhan Nayak",
      email: "bm23btech11005@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Tejaswi",
      email: "co23btech11008@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Athiradh R N",
      email: "ch24mtech14005@iith.ac.in",
      position: "Coordinator",
    },
  ],
  rang: [
    {
      name: "Piyush Shyam Kothawade",
      email: "es22btech11026@iith.ac.in",
      position: "Head",
    },
    {
      name: "Mayank Pippal",
      email: "ce24btech11037@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Chirag Veerwani",
      email: "ic24btech11005@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Sourabh Tambi",
      email: "ma24mscst11022@iith.ac.in",
      position: "Coordinator",
    },
  ],
  vibes: [
    {
      name: "Venkat Raghav",
      email: "ep23btech11035@iith.ac.in",
      position: "Head",
    },
    {
      name: "Amogh Kulkarni",
      email: "bt24btech11002@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Kshiteesh S.",
      email: "ep24btech11023@iith.ac.in",
      position: "Coordinator",
    },
  ],
  gesture: [
    {
      name: "B H Shashaank",
      email: "ch23btech11009@iith.ac.in",
      position: "Head",
    },
    {
      name: "Abhinaba Das",
      email: "ic24btech11001@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Isha Mhatre",
      email: "bd24bdes11005@iith.ac.in",
      position: "Coordinator",
    },
  ],
  otaku: [
    {
      name: "Karthik Kumar",
      email: "co23btech11014@iith.ac.in",
      position: "Head",
    },
    {
      name: "Sashim Suryawanshi",
      email: "ep23btech11026@iith.ac.in",
      position: "Coordinator",
    },
  ],
  fashion: [
    {
      name: "Nidhi",
      email: "bd24bdes11006@iith.ac.in",
      position: "Head",
    },
    {
      name: "Nitya V",
      email: "bd24bdes11025@iith.ac.in",
      position: "Coordinator",
    },
  ],
};

function Card({ title, desc, imgUrl }) {
  return (
    <div className="text-black shadow-black drop-shadow-lg bg-white  rounded-2xl flex flex-col justify-center items-center p-[2rem] pt-[1rem] mt-3 max-w-5xl ">
      <div className="self-start font-semibold">
        <h2 className="text-4xl">{title}</h2>
      </div>
      <div className="h-[15rem] w-[15rem] mt-4 rounded-2xl flex justify-center items-center">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="mt-8">
        <p>{desc}</p>
      </div>
    </div>
  );
}

function CulturalMobile() {
  return (
    <div className="lg:hidden">
      <Swiper
        loop={true}
        autoHeight={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={20}
        navigation={true}
        className="[&>div]:w-[80%] !py-3"
      >
        <SwiperSlide className="shadow-md">
          <Card
            imgUrl={clubLogos["infocus"]}
            title={"Infocus"}
            desc={clubs[0].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["btl"]}
            title={"Behind The Lens"}
            desc={clubs[1].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["vibes"]}
            title={"Vibes"}
            desc={clubs[2].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["shuffle"]}
            title={"Shuffle"}
            desc={clubs[3].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["gesture"]}
            title={"Gesture"}
            desc={clubs[4].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["rang"]}
            title={"Rang de Manch"}
            desc={clubs[5].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["otaku"]}
            title={"Otaku"}
            desc={clubs[6].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["fashion"]}
            title={"Fashion Club"}
            desc={clubs[7].desc}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function Cultural() {
  const [club, setClub] = useState("infocus");
  const [desc, setDesc] = useState(clubs[0].desc);

  useEffect(() => {
    console.log({ club });
    let description = clubs.filter((el) => el.name === club);
    setDesc(description[0].desc);
  }, [club]);

  return (
    <div className="my-8 col-span-6 w-full">
      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center lg:text-left">
          Cultural and Literary Secretary
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-[#2F2F2F] px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className="italic ">Cultural & Literary Secretary</h4>
            <h3 className="lg:text-2xl text-xl font-semibold ">Navin Joshi</h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">
                +91 9340256954
              </h4>
            </address>
          </div>
        </div>
      </div>
      <h2 className="lg:text-2xl text-4xl font-bold text-center lg:text-left mt-[2rem] mb-[1rem]">
        Cultural Clubs
      </h2>
      <div className="lg:grid lg:grid-cols-5 pt-4 hidden">
        <ul
          className={`lg:col-span-1 hidden text-2xl lg:flex lg:flex-col gap-3 [&>li]:cursor-pointer bg-[#2F2F2F] p-8 flex-col justify-center items-start rounded-xl`}
        >
          <li
            className={`px-4 py-2 rounded-md ${club === "infocus" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("infocus");
            }}
          >
            Infocus
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "vibes" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("vibes");
            }}
          >
            Vibes
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "rang" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("rang");
            }}
          >
            Rang De Manch
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "btl" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("btl");
            }}
          >
            Behind The Lens
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "shuffle" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("shuffle");
            }}
          >
            Shuffle
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "gesture" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("gesture");
            }}
          >
            Gesture
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "otaku" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("otaku");
            }}
          >
            Otaku
          </li>
          <li
            className={`px-4 py-2 rounded-md ${club === "fashion" ? "bg-[#B74224]" : "text-opacity-40"
              }`}
            onClick={() => {
              setClub("fashion");
            }}
          >
            Fashion Club
          </li>
        </ul>
        <div
          className={`lg:col-span-4 col-span-6 grid grid-cols-6 gap-6 lg:gap-[2rem] items-center relative z-0`}
        >
          <div className="lg:col-span-4 lg:text-[18px] col-span-full lg:row-span-full m-8">
            <p className="mt-8 justify-self-start">{desc}</p>
            <div className="grid grid-cols-2 gap-2">
              {coords[club]?.map((coord, index) => {
                return (
                  <TCard
                    key={index}
                    name={coord.name}
                    mobile={""}
                    position={coord.position}
                    email={coord.email}
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
      <CulturalMobile />
    </div>
  );
}

export default Cultural;
