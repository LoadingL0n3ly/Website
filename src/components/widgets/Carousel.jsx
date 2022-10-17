import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Swiper,  SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import '~/assets/styles/base.css'
import { Autoplay, Pagination } from 'swiper';

function C() {
  return (
    <Swiper
	spaceBetween={50}
	autoplay={{
		delay: 2500,
		disableOnInteraction: false,
	}}
	loop={true}
	grabCursor={true}
	autoHeight={true}
	autoPlay={{
		delay: 50000,
		disableOnInteraction: false,
	}}
	pagination={true}
	modules={[Autoplay, Pagination]}
	className="cursor-grab active:cursor-grabbing"
	style={{ height: '100%' }}
    >
		<SwiperSlide>
			<div className='bg-[#E2b52b] text-[#731d1d] flex flex-col font-bold justify-center items-center rounded-2xl drop-shadow-2xl w-[85%] py-8 md:py-24 px-10 mx-auto'>      
				<div className="text-4xl md:text-6xl pb-10">
					<span className="font-black text-[2.5rem] md:text-[4rem] pr-2 tracking-[0.2rem] ">❝</span>Thanks guys, keep up the good work! I would also like to say thank you to all your staff. Without roblos, we would have gone bankrupt by now.
				</div>
				<div className="flex flex-row text-4xl justify-center items-center">
					<img src="./logo.png" className="w-24 h-24 rounded-3xl"/>
					<div className="flex flex-col -mb-8">
						<span className="pl-10">AAAA</span>
						<span className="pl-10 text-2xl">CEO</span>
					</div>
				</div>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div className='bg-[#E2b52b] text-[#731d1d] flex flex-col font-bold justify-center items-center rounded-2xl drop-shadow-2xl w-[85%] py-8 md:py-24 px-10 mx-auto'>      
				<div className="text-4xl md:text-6xl pb-10">
					<span className="font-black text-[2.5rem] md:text-[4rem] pr-2 tracking-[0.2rem] ">❝</span>Roblos is both attractive and highly adaptable. Best. Product. Ever! Roblos is the real deal! Roblos did exactly what you said it does.
				</div>
				<div className="flex flex-row text-4xl justify-center items-center">
					<img src="./logo.png" className="w-24 h-24 rounded-3xl"/>
					<div className="flex flex-col -mb-8">
						<span className="pl-10">AAAA</span>
						<span className="pl-10 text-2xl">CEO</span>
					</div>
				</div>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div className='bg-[#E2b52b] text-[#731d1d] flex flex-col font-bold justify-center items-center rounded-2xl drop-shadow-2xl w-[85%] py-8 md:py-24 px-10 mx-auto'>      
				<div className="text-4xl md:text-6xl pb-10">
					<span className="font-black text-[2.5rem] md:text-[4rem] pr-2 tracking-[0.2rem] ">❝</span>Thank you for making it painless, pleasant and most of all hassle free! It really saves me time and effort. roblos is exactly what our business has been lacking.
				</div>
				<div className="flex flex-row text-4xl justify-center items-center">
					<img src="./logo.png" className="w-24 h-24 rounded-3xl"/>
					<div className="flex flex-col -mb-8">
						<span className="pl-10">AAAA</span>
						<span className="pl-10 text-2xl">CEO</span>
					</div>
				</div>
			</div>
		</SwiperSlide>
    </Swiper>
  )
}

class Cs extends Component {
	render() {
		return (
			<div className="pt-8 pb-12 text-center grid-cols-1 items-center -z-10">
				<h1 className="text-6xl xl:text-8xl mx-auto text-center text-mainYellow uppercase pb-4"><span className="font-black text-5xl xl:text-8xl">testimonials</span></h1>
				<C />
			</div>
		);
	}
}


export default Cs;