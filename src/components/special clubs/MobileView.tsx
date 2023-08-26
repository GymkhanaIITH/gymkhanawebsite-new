import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
import Card from './Card';
import 'swiper/css';
import './clubs.css';

export const elan =
  'Elan & ηVision is the annual techno-cultural fest of IIT Hyderabad and is one of the largest fests in South India. It is entirely organized by IITH students.Elan refers to the cultural part and ηVision cites the technological part of the fest. This festival features several professional and semi-professional crowd-pulling events and promises to be a grand event showcasing the best of cultural performances, technical solutions, and student community advances 2022';
export const ecell =
  "We at IIT Hyderabad's Entrepreneurship Cell believe in passion, hard effort, and an unquenchable drive for achievement. It is a place that is the confluence of a billion sparks of ideas, a place where the fire of passion mingles with the cold calculation of the brain, and a place where dreams come true. We are people who love nothing more than the thrill of coming up with ideas, working them out into businesses and experiencing the pleasure of watching it all come to fruition.";
export const tedx =
  'TEDxIITHyderabad is an annual programme aimed at educating, inspiring and connecting great minds. Ours is a information seeking age and we are constantly bombarded by it. TEDx is a platform where open-minded, spirited people are brought together to share novel ideas to provoke innovations and ideas that matter. ';
export const sunshine =
  'Since its inception on January 12, 2012, Sunshine- the counselling cell at IIT- H, has been committed to helping the student community. The dedicated team of Sunshine comprises of a Faculty in- Charge, two Psychological Counsellors, fifteen faculty representatives, three student heads, seven management team members and thirty six student mentors.';
export const milan =
  '"Milan" is the annual techno-cultural-sports General Championship of IIT Hyderabad. It consists of 19 Sports, 18 Cultural and 11 technical events conducted between all the hostel blocks. In this second edition of Milan, presented by SBI YONO, the sports, cultural, and technical events will start from 9th September and will conclude on 18th September';
export const ebsb =
  'EBSB is a programme for promoting national integration through systematic exchange between paired institutes in the cultural, literary and linguistic fields. We intend to learn the linguistic and cultural aspects of the home state of our paired institute, covering history, culture, language, cuisine, festivals, clothing etc. The EBSB club has been formed at IITH to carry forward activities under the programme with our paired institute, IIT Kanpur. We aim to celebrate a plethora of Indian festivals and customs (paying special attention to those of Uttar Pradesh) in ways which are both enjoyable and informative which would thereby educate our fellow students while having fun.';
export const eml =
  'We, the Extra Mural Lectures team at IIT Hyderabad, work in bringing decorated personalities from eclectic domains on one platform to talk about various subjects like art, social work, economics, psychology, sports, science etc and inspire our IIT Hyderabad fraternity with insights that they could induce in their lives. LEARN BEYOND THE FOUR WALLS OF CLASSROOM';
export const tinkerer =
  'At TL IITH we believe tinkering is the way to innovation, our aim is to provide a platform to bootstrap a culture of genuine excitement regarding science and technology. We try to cultivate a hands-on approach to entrepreneurship, such that leaders thus created are ready to face and solve the problems of the future.';
export const fcc =
  'The Finance and Consulting Club at IIT Hyderabad is a student-run organization that aims to provide opportunities to students interested in finance and consulting to learn about these fields and explore career options in these areas. We believe in knowledge sharing, and strive towards building an active community around finance & management.\
FCC organizes sessions covering diverse topics like personal finance, stock markets, quantitative research, business case studies and product management. We also focus on increasing awareness around career opportunities in finance and management for IITH students.';

function MobileView() {
  return (
    <div className="mb-8">
      <div>
        <h2 className="font-bold text-4xl p-8 text-center">
          Organization Clubs
        </h2>
      </div>
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        spaceBetween={0}
        coverflowEffect={{
          slideShadows: false,
        }}
        slidesPerView={'auto'}
        loop={true}
      >
        <SwiperSlide>
          <Card
            title="Elan & nVision"
            imgUrl="https://res.cloudinary.com/dwsverefw/image/upload/c_scale,q_41,w_408/v1671967212/media%20council/cultural%20clubs/elan-black_hri8yx.png"
            desc={elan}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="E-Cell"
            desc={ecell}
            imgUrl="https://res.cloudinary.com/dwsverefw/image/upload/v1671970821/media%20council/cultural%20clubs/ecell-logo_rnbgb0.png"
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="TedxIITHyderabad"
            desc={tedx}
            imgUrl={
              'https://res.cloudinary.com/dwsverefw/image/upload/v1672775489/media%20council/orgs/t-org_g1scrw.jpg'
            }
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            imgClass="-top-4"
            title="Sunshine"
            desc={sunshine}
            imgUrl={
              'https://res.cloudinary.com/dwsverefw/image/upload/v1671971814/media%20council/cultural%20clubs/sunshine-logo_pq1ipp.png'
            }
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            imgClass="scale-[0.8]"
            title="Milan"
            desc={milan}
            imgUrl={
              'https://res.cloudinary.com/dwsverefw/image/upload/v1671733197/media%20council/milan_logo_og_rxtdnj.png'
            }
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Ek Bharat Shresht Bharat"
            imgUrl="https://res.cloudinary.com/dwsverefw/image/upload/v1672987624/ecell/ebsb_cqwr9e.jpg"
            desc={ebsb}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Extra Mural Lectures"
            imgUrl="/eml logo.png"
            desc={eml}
          ></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card title="Tinkerers Lab" imgUrl="/tinkerer.png" desc={eml}></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card title="FCC" imgUrl="/fcc.png" desc={fcc}></Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MobileView;
