const dummy = '/tedx.iithyderabad.jpg';
const bg = 'https://www.tedxgangtok.com/assets/images/tedx-photo.jpg';
import Options from './Options';

function Tedex() {
  return (
    <section className="px-[2rem] py-[2rem] bg-[#000000d1] text-white relative lg:px-[7rem] lg:pt-[4rem] min-h-[100vh] lg:flex lg:flex-col lg:justify-center">
      <div className="w-full  h-[5rem]"></div>
      <Options eventId={'ted-talks'} />
      <div className="relative z-10">
        <h2 className="text-4xl font-semibold lg:text-[4rem] lg:font-bold sm:text-xl">
          TEDx IIT Hyderabad
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-5 lg:grow">
  <div className="w-full h-auto my-6 px-[2rem] lg:col-span-2 lg:flex justify-center items-center">
    <img src={dummy} alt="tedex" className="w-full sm:w-32 md:w-8/12 lg:w-full" /> {/* Adjusted size based on screen width */}
  </div>
        <div className="lg:col-span-3 pt-6 self-center mt-12">
          <p className="lg:text-[1.25rem]">
            TEDxIITHyderabad is an annual programme aimed at educating,
            inspiring and connecting great minds. Ours is a information seeking
            age and we are constantly bombarded by it. TEDx is a platform where
            open-minded, spirited people are brought together to share novel
            ideas to provoke innovations and ideas that matter. The
            TEDxIITHyderabad event will be a day long feature where the speakers
            go live and the TED Talks Videos will be presented, with the goal of
            realizing and promoting remarkable thinking. At TEDxIITHyderabad, we
            believe it is important to invest in areas where the local community
            finds its relevance. Consequently, TEDxIITHyderabad is an effort to
            bring together and showcase the bright minds from the local scene-
            we are continuously in awe of how much Hyderabad has to offer in
            terms of the quality of ideas and number of people ready to share
            their stories with the world.
          </p>
          <div className="my-8 justify-end lg:flex">
            <a
              href="https://tedxiithyderabad.iith.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <button className=" scale-90 disabled mt-4 text-xl bg-[#ff2b06] text-white px-4 py-3 rounded-lg">
                Navigate to Website
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="h-full w-full absolute top-0 left-0 -z-10 blur-sm ">
        <img src={bg} alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  );
}

export default Tedex;
