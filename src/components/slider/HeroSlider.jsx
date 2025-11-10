import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  return (
    <section className="w-full h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center items-center text-center"

        style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s")`,

      backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",

         }}
          >




<h2 className="text-4xl sm:text-5xl font-bold text-white text-center">
  AI Is Shaping the World
</h2>
<p className="text-white text-lg text-center mt-2">
  AI is transforming industries by automating tasks, improving predictions, and solving global challenges.
</p>






          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
<div
  className="h-full flex flex-col justify-center items-center text-center"
  style={{
    backgroundImage: `url("https://www.trentonsystems.com/hs-fs/hubfs/Machine_Learning%20.jpeg?width=8082&name=Machine_Learning%20.jpeg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

<h2 className="text-4xl sm:text-5xl font-bold text-white text-center">
  Machine Learning in Action
</h2>
<p className="text-white text-lg text-center mt-2">
  ML models learn from data to power smart applications like fraud detection, recommendations, and automation.
</p>





          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
<div
  className="h-full flex flex-col justify-center items-center text-center"
  style={{
    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-2kYBWbjzChh5HYzAksmawjHDJKBHanJhw&s")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

<h2 className="text-4xl sm:text-5xl font-bold text-white text-center">
  AI in Everyday Life
</h2>
<p className="text-white text-lg text-center mt-2">
  From smart assistants to personalized feeds, AI quietly enhances how we live, work, and connect.
</p>


          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
