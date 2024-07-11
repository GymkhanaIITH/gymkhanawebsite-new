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
    name: "litsoc",
    desc: "The IITH Quiz Club is a group for people enthusiastic about testing their knowledge on a variety of subjects. The club members meet regularly to compete in quizzes about anything ranging to science to pop culture. The club give people a fun opportunity to learn new trivia, meet new people, and challenge oneself mentally.We are a bunch of people who call ourselves writers. We gather our fellow writing enthusiasts at a place and conduct events, sessions and competitions. We, in short, enjoy, promote and indulge in having fun through the art of writing.",
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
];

const clubLogos = {
  infocus: "/public/images/councils/infocus.png",
  vibes:
    "https://res.cloudinary.com/dwsverefw/image/upload/c_fit,h_208,q_29,w_318/v1671964501/media%20council/cultural%20clubs/vibes_nr2iou.png",
  litsoc:
    "https://res.cloudinary.com/dwsverefw/image/upload/c_scale,w_293/v1671968750/media%20council/cultural%20clubs/litsoc_awwkkd.png",
  btl: "/public/images/councils/btl.png",
  rang: "/public/images/councils/rdm.jpg",
  shuffle: "/public/images/councils/shuffle.png",
  gesture: "/public/images/councils/gesture.jpg",
};

const coords = {
  infocus: [
    {
      name: "Uttej",
      email: "ms21btech11016@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Shane Ali",
      email: "me21btech11046@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Sahil Kushwaha ",
      email: "ch22btech11030@iith.ac.in",
      position: "Coordinator",
    },
  ],
  btl: [
    {
      name: "Snehil Singh",
      email: "ee22btech11050@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Parlapalli Teja",
      email: "Ic22btech11010@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Kotichintala Aravind Siddhartha",
      email: "ce21btech11021@iith.ac.in",
      position: "Coordinator",
    },
  ],
  shuffle: [
    {
      name: "Shreyas Wankhede",
      email: "ai21btech11028@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Diva Jaiwar",
      email: "me21btech11014@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Niha Maloth",
      email: "es22btech11024@iith.ac.in",
      position: "Coordinator",
    },
  ],
  rang: [
    {
      name: "Dibyanshu Kumar",
      email: "ep21btech11011@iith.ac.in",
      position: "Overall Coordinator",
    },
    {
      name: "Pragya Yadav",
      email: "ch21btech11023@iith.ac.in",
      position: "Swaang Coordinator",
    },
    {
      name: "Ashwin Kumar",
      email: "ce21btech11008@iith.ac.in",
      position: "Irshaad Coordinator",
    },
    {
      name: "Karthik Nambiar",
      email: "ep21btech11015@iith.ac.in",
      position: "Awwfense Coordinator",
    },
  ],
  vibes: [
    {
      name: "Tanishq Bhattacharjee",
      email: "ms22btech11027@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Divya Mehul Rajparia",
      email: "es22btech11013@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Rishit D",
      email: "cs21btech11053@iith.ac.in",
      position: "Coordinator",
    },
  ],
  gesture: [
    {
      name: "Arthi GJ",
      email: "bd21bdes11005@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Anubhav Singh",
      email: "ms21btech11008@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Avani Gupta",
      email: "me21btech11007@iith.ac.in",
      position: "Coordinator",
    },
  ],
  // beaumonde: [
  //   {
  //     name: 'Swadhin',
  //     email: 'md22mdes14003@iith.ac.in',
  //     position: 'Coordinator',
  //   },
  // ],
  writingclub: [
    {
      name: "Swarnima Siddhartha",
      email: "bd22bdes11017@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Anek Anjireddy",
      email: "ee22btech11007@iith.ac.in",
      position: "Coordinator",
    },
  ],
  bmc: [
    {
      name: "Ananya Thakur",
      email: "bd22bdes11002@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Hitesh Donepudi",
      email: "bm20btech11003@iith.ac.in",
      position: "Coordinator",
    },
  ],
  quizclub: [
    {
      name: "Umair Parwez",
      email: "ee22btech11054@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Harshit Thakur",
      email: "bm21btech11010@iith.ac.in",
      position: "Coordinator",
    },
  ],
  debateclub: [
    {
      name: "Anirudh Saikrishnan",
      email: "cs22btech11004@iith.ac.in",
      position: "Coordinator",
    },
    {
      name: "Arsh Arora",
      email: "bm22btech11004@iith.ac.in",
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
            imgUrl={clubLogos["litsoc"]}
            title={"Litsoc"}
            desc={clubs[1].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["btl"]}
            title={"Behind The Lens"}
            desc={clubs[2].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["vibes"]}
            title={"Vibes"}
            desc={clubs[3].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["shuffle"]}
            title={"Shuffle"}
            desc={clubs[4].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["gesture"]}
            title={"Gesture"}
            desc={clubs[5].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["rdm"]}
            title={"Rang de Manch"}
            desc={clubs[6].desc}
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
            <h3 className="lg:text-2xl text-xl font-semibold ">SREEVAS TM</h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">
                +91 8610808854
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
            className={`px-4 py-2 rounded-md ${
              club === "infocus" ? "bg-[#B74224]" : "text-opacity-40"
            }`}
            onClick={() => {
              setClub("infocus");
            }}
          >
            Infocus
          </li>
          <li
            className={`px-4 py-2 rounded-md ${
              club === "litsoc" ? "bg-[#B74224]" : "text-opacity-40"
            }`}
            onClick={() => {
              setClub("litsoc");
            }}
          >
            Litsoc
          </li>
          <li
            className={`px-4 py-2 rounded-md ${
              club === "vibes" ? "bg-[#B74224]" : "text-opacity-40"
            }`}
            onClick={() => {
              setClub("vibes");
            }}
          >
            Vibes
          </li>
          <li
            className={`px-4 py-2 rounded-md ${
              club === "rang" ? "bg-[#B74224]" : "text-opacity-40"
            }`}
            onClick={() => {
              setClub("rang");
            }}
          >
            Rang De Manch
          </li>
          <li
            className={`px-4 py-2 rounded-md ${
              club === "btl" ? "bg-[#B74224]" : "text-opacity-40"
            }`}
            onClick={() => {
              setClub("btl");
            }}
          >
            Behind The Lens
          </li>
          <li
            className={`px-4 py-2 rounded-md ${
              club === "shuffle" ? "bg-[#B74224]" : "text-opacity-40"
            }`}
            onClick={() => {
              setClub("shuffle");
            }}
          >
            Shuffle
          </li>
          <li
            className={`px-4 py-2 rounded-md ${
              club === "gesture" ? "bg-[#B74224]" : "text-opacity-40"
            }`}
            onClick={() => {
              setClub("gesture");
            }}
          >
            Gesture
          </li>
        </ul>
        <div
          className={`lg:col-span-4 col-span-6 grid grid-cols-6 gap-6 lg:gap-[2rem] items-center relative z-0 ${
            club === "litsoc" ? "hidden" : "block"
          }`}
        >
          <div className="lg:col-span-4 lg:text-[18px] col-span-full lg:row-span-full m-8">
            <p className="mt-8 justify-self-start">{desc}</p>
            <div className="grid grid-cols-2 gap-2">
              {coords[club]?.map((coord) => {
                return (
                  <TCard
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
        <div
          className={`lg:col-span-4 col-span-6 grid grid-cols-6 gap-6 lg:gap-[2rem] items-center relative ${
            club === "litsoc" ? "block" : "hidden"
          }`}
        >
          <div className="lg:col-span-4 lg:text-[18px] col-span-full lg:row-span-full m-8">
            <p className="mt-8 justify-self-start">{clubs[1].desc}</p>
            <div className="grid grid-cols-2 gap-2">
              <h2 className="text-2xl mt-8 font-bold">Quiz Club</h2> <br />
              {coords.quizclub?.map((coord) => {
                return (
                  <TCard
                    name={coord.name}
                    mobile={""}
                    position={"Coordinator"}
                    email={coord.email}
                    activePosition="Coordinator"
                  />
                );
              })}
              <h2 className="text-2xl mt-8 font-bold">Books and Movies Club</h2>
              <br />
              {coords.bmc?.map((coord) => {
                return (
                  <TCard
                    name={coord.name}
                    mobile={""}
                    position={"Coordinator"}
                    email={coord.email}
                    activePosition="Coordinator"
                  />
                );
              })}
              <h2 className="text-2xl mt-8 font-bold">Debate Club</h2>
              <br />
              {coords.debateclub?.map((coord) => {
                return (
                  <TCard
                    name={coord.name}
                    mobile={""}
                    position={"Coordinator"}
                    email={coord.email}
                    activePosition="Coordinator"
                  />
                );
              })}
              <h2 className="text-2xl mt-8 font-bold">Writing Club</h2>
              <br />
              {coords.writingclub?.map((coord) => {
                return (
                  <TCard
                    name={coord.name}
                    mobile={""}
                    position={"Coordinator"}
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
              src={clubLogos.litsoc}
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
