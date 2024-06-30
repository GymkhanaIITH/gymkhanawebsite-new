import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
import Card from './Card';
import 'swiper/css';
import './clubs.css';

export const elan =
  'Elan & ηVision is the annual techno-cultural fest of IIT Hyderabad, entirely organized by the student community of IIT Hyderabad. Elan represents the cultural wing of the fest while ηVision cites the technical part. Several pre-events and workshops throughout the tenure lead on to our college fest; a grand showcase of live performances, crowd-pulling cultural and technical competitions, workshops, games - all of it with a simple message to celebrate the friendship and harmony in the student community. The members of this cell are responsible for ideating and executing plans to provide a memorable college fest to all the students.';
export const ecell =
  "E-Cell IIT Hyderabad is a vibrant and dynamic platform that nurtures entrepreneurial skills among students. It aims to foster a startup culture, encouraging students to develop their ideas into viable business ventures. The cell acts as a catalyst for startup incubation, offering resources, mentorship, and networking opportunities. E-Cell is more than a platform; it's a catalyst for entrepreneurial success.";
export const tedx =
  'TEDxIITHyderabad is an annual programme aimed at educating, inspiring and connecting great minds. Ours is a information seeking age and we are constantly bombarded by it. TEDx is a platform where open-minded, spirited people are brought together to share novel ideas to provoke innovations and ideas that matter. ';
export const sunshine =
  'Since its inception on January 12, 2012, Sunshine- the counselling cell at IIT- H, has been committed to helping the student community. The dedicated team of Sunshine comprises of a Faculty in- Charge, two Psychological Counsellors, fifteen faculty representatives, three student heads, seven management team members and thirty six student mentors.';
export const milan =
  "Milan is IIT Hyderabad’s General championship between the Hostels, it is packed with sports, cultural, and tech competitions. It's so prestigious and one of the largest tournaments in Telugu states. We can expect this event for 10 days of a big blast of intense competition between the hostels in September of this year.MILAN stands out as one of the most significant events at IIT Hyderabad due to its inclusive approach. With a football of over 5000 students, it transforms the campus into a hub of excitement. The event not only highlights the exceptional abilities of IIT Hyderabad students but also promotes teamwork, innovation, and cultural exchange. MILAN is a celebration of talent, creativity, and sportsmanship, making it a cornerstone of student life at IIT Hyderabad.";
export const ebsb =
  "Ek Bharat Shreshtha Bharat (EBSB) is a cultural club that brings together the rich tapestry of India's diverse cultures and traditions. At IIT Hyderabad, we take immense pride in celebrating our unity in diversity through various events and festivals that showcase the beauty and depth of Indian culture.";
export const eml =
  'We, the Extra Mural Lectures team at IIT Hyderabad,work in bringing decorated personalities from eclectic domains on one platform to talk about various subjects like art, social work, economics, psychology, sports, science etc and inspire our IIT Hyderabad fraternity with insights that they could induce in their lives';
export const tinkerer =
  "Tinkerers' Lab is a student run maker-space and technical society with a well equipped technical team pushing forward to motivate the agenda of Techno-entrepreneurship across the campus. WE take and carry the flag of Tinkering and support all the bat-crap crazy ideas any student on campus may have and make them into a reality. We also focus very extensively on spreading knowledge on various technical domains such as Machine Learning, Mechatronics and Software Development. Our agenda is not to study topics in solitude, rather we promote integration within these topics to prepare industry level projects in your BTech, to make your CV stronger than ever.";
export const fcc =
  'We are the primary club for all finance and consulting related stuff on campus, and as we all know, finance and consulting are the two jobs an IIT seeks at some or other point in their life without fail :) We work to improve awareness of topics of consulting, product management and finance through regular sessions and competitions';

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
