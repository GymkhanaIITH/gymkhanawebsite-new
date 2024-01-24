import dummy from "../../images/diesta-big.png";
const bg = "../../images/diestabg.jpg";
import Options from "./Options";
import Leaderboard from "../Leaderboard";

function Diesta() {
  return (
    <section className="px-[2rem] py-[2rem] bg-[#000000d1] text-white relative lg:px-[7rem] lg:pt-[4rem] min-h-[100vh] lg:flex lg:flex-col lg:justify-center">
      <div className="w-full  h-[5rem]"></div>
      <Options eventId={"diesta"} />
      <div className="relative z-10">
        <h2 className="text-4xl font-semibold uppercase lg:text-[4rem] lg:font-bold">
          Diesta
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-5 lg:grow">
        <div className="w-full h-auto my-6 px-[2rem] lg:col-span-2 lg:flex justify-center items-center">
          <img src={dummy} alt="diesta" />
        </div>
        <div className="py-5 lg:col-span-3 self-center">
          <p className="lg:text-[1.25rem]">
            Introduced in 2021, Diesta is an annual Interdepartmental sports &
            cultural fest of IIT Hyderabad. All the departments are divided into
            7-10 teams. All the teams put their best foot forward to take away
            the ultimate trophy, the glory of being the best of them all.
          </p>
        </div>
      </div>

      <div className="w-full h-auto py-24">
        <Leaderboard />
      </div>
    
      {/* <div className="h-full w-full absolute top-0 left-0 -z-10 blur-sm ">
        <img src={bg} alt="" className="h-full w-full object-cover" />
      </div> */}
    </section>
  );
}

export default Diesta;
