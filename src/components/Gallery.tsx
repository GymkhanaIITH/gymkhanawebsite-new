// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

import "./Gallery.css";

// import required modules

export default function Gallery() {
  const image1 = "images/gallery/5.jpg";
  const image2 = "images/gallery/1.jpg";
  const image3 = "images/gallery/64.jpg";
  const image4 = "images/gallery/63.webp";
  const image5 = "images/gallery/62.jpg";
  const image6 = "images/gallery/62.webp";
  const image7 = "images/gallery/61.webp";
  const image8 = "images/gallery/60.jpg";
  const image9 = "images/gallery/59.webp";
  const image10 = "images/gallery/58.webp";

  const images = [
    image5,
    image1,
    image3,
    image2,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper w-full py-[50px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="!w-[300px] !h-[300px] sm:!w-[400px] sm:!h-[400px]">
            <img src={src} alt="" className="block w-full h-full object-cover rounded-lg shadow-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
