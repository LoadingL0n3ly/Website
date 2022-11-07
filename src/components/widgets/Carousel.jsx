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
					<span className="font-black text-[2.5rem] md:text-[4rem] pr-2 tracking-[0.2rem] ">❝</span>Fedor is a do-it-all kind of guy, he handled texturing, modeling, and general graphic design work for us and got it done in a very timely manner with great quality. Would recommend working with him!
				</div>
				<div className="flex flex-row text-4xl justify-center items-center">
					<img src="https://pbs.twimg.com/profile_images/1580557859678556163/TOAFJq-O_400x400.jpg" className="w-24 h-24 rounded-3xl"/>
					<div className="flex flex-col -mb-8">
						<span className="pl-10">Nate Spell</span>
						<span className="pl-10 text-2xl">CEO of Barrier Four</span>
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