import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCoverflow } from "swiper";

function NewsCard({
  title,
  imgUrl = "",
  children,
  date,
}: {
  title?: string;
  imgUrl?: string;
  children?: any;
  date?: string;
}) {
  return (
    <div className="p-5 border-2 shadow-lg rounded-xl ">
      <div className="w-[100%] relative rounded-lg overflow-hidden">
        {imgUrl.trim().length !== 0 && (
          <img src={imgUrl} alt="E-Summit IITH" className="object-cover" />
        )}
      </div>

      <h2 className="text-2xl font-semibold pt-5 ">{title}</h2>
      <i className="bg-p text-sm my-2 text-w px-4 py-2 rounded-full inline-block">
        {date}
      </i>

      <div>{children}</div>
    </div>
  );
}

function UpdatesSection() {
  return (
    <section className="bg-w p-5 px-0 flex flex-col py-[1.5rem] lg:py-[3rem]">
      <div className="px-7">
        <div className="bg-r h-[6px] w-full self-center">
          <div className="bg-p h-[6px] w-16 ml-16"></div>
        </div>
      </div>
      <h2 className="text-p font-bold text-4xl pt-3 px-7 mb-4 lg:pl-[4rem] lg:text-5xl lg:py-[2rem]">
        Latest
      </h2>
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1.2}
          className=""
          centeredSlides={true}
          loop
          modules={[EffectCoverflow]}
          effect="coverflow"
          breakpoints={{
            610: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
          coverflowEffect={{
            slideShadows: false,
            modifier: 0,
            rotate: 0,
          }}
        >
          <SwiperSlide className="">
            {" "}
            <NewsCard
              title="E-Summit"
              imgUrl="/latest/1.jpg"
              date={"20th Jan 2023"}
            >
              <p>
                E-Summit conducted by E-Cell IIT Hyderabad is taking place right
                now!
              </p>
            </NewsCard>
          </SwiperSlide>
          <SwiperSlide className="">
            {" "}
            <NewsCard
              title="Elan & nVision"
              date="20th Jan 2023"
              imgUrl="https://i0.wp.com/www.igniteengineers.com/wp-content/uploads/2019/02/2.png?ssl=1"
            >
              <p>Elan & nVision to be held in February!</p>
            </NewsCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default UpdatesSection;
