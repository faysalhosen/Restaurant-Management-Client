
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider1 from "../../assets/home/slide1.jpg"
import Slider2 from "../../assets/home/slide2.jpg"
import Slider3 from "../../assets/home/slide3.jpg"
import Slider4 from "../../assets/home/slide4.jpg"
import Slider5 from "../../assets/home/slide5.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Category() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Slider1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Salads</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={Slider2} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slider3} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Soups</h3>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Slider4} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Desserts</h3>
        </SwiperSlide>
            
        <SwiperSlide>
            <img src={Slider5} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Salads</h3>
            </SwiperSlide>
        
      </Swiper>
    </>
  );
}
