import Options from './Options';

function Zozimus() {
  return (
    <section className="px-[2rem] py-[2rem] bg-[#000000d1] text-white relative lg:px-[7rem] lg:pt-[4rem] min-h-[100vh] lg:flex lg:flex-col lg:justify-center">
      <div className="w-full  h-[5rem]"></div>
      <Options eventId={'zozimus'} />
      <div className="relative z-10">
        <h2 className="text-4xl font-semibold uppercase lg:text-[4rem] lg:font-bold">
          Zozimus
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-5 lg:grow">
        <div className="w-full h-auto my-6 px-[2rem] lg:col-span-2 lg:flex justify-center items-center">
          <img src={'/images/zozimus.png'} alt="zozimus" />
        </div>
        <div className="py-5 lg:col-span-3 self-center">
          <p className="lg:text-[1.25rem]">
            The IITH Literary Fest is back on April 8th and 9th, 2023, and it's
            going to be amazing! We're calling it Zozimus: Through the looking
            glass, and it's all about celebrating literature in a fresh,
            creative way. We'll be taking iconic literature and putting our own
            surreal twist on them but still keeping their heart and soul alive.
            <br />
            <br />
            One of the highlights is the Zoz MUN, where you'll participate in a
            thrilling and challenging Model United Nations. But that's not all -
            there will also be quizzes, debates, a cool treasure hunt, and
            plenty of chances to chat with fellow book lovers and maybe even
            discover some new literary favorites. So come along, spread the
            word, and have fun!
          </p>

          <p className="lg:text-[1.25rem] mt-[15px]">
            Reach out to us on the following platforms!
          </p>
          <p className="lg:text-lg underline leading-6">
            <br />
            <a
              href="https://www.instagram.com/zozimus.iith/"
              className="mt-[10px]"
            >
              Instagram
            </a>
            <br />
            <a
              href="https://www.facebook.com/zozimus.iith"
              className="mt-[10px]"
            >
              Facebook
            </a>
            <br />
            <a href="mailto:zozimus@gymkhana.iith.ac.in" className="mt-[10px]">
              Email
            </a>
            <br />
          </p>
        </div>
      </div>

      <div className="h-full w-full absolute top-0 left-0 -z-10 blur-sm ">
        <img
          src={'/images/zozimusbg.jpg'}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Zozimus;
