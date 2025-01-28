import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const Slider = () => {
    const slides = [
        {
            url: "https://i.ibb.co/tCWrDv2/1.png",
        },
        {
            url: "https://i.ibb.co/Zd5WHLx/2.png",
        },
        {
            url: "https://i.ibb.co/sFKx9vK/3.png",
        },
        {
            url: "https://i.ibb.co/T80t342/4.png",
        },
        {
            url: "https://i.ibb.co/nggDv3H/5.png",
        },
    ];
    return (
        <div className="px-3 py-8">
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper rounded-xl max-h-[480px]"
            >
                {slides.map((img) => (
                    <SwiperSlide key={img.url}>
                        <img className="object-cover object-center w-full" src={img.url} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
