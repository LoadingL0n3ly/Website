import Twist from '~/components/core/Twist';
import React, { Component } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Mousewheel, Pagination } from "swiper";
import '~/assets/styles/b.css'
import {getHomePermalink} from '~/utils/permalinks';


function Card(props) {
	return(
		<Twist>
			<Twist options={{ max: 15, perspective: 1000, scale: 0.9}}>
				{props.children}
			</Twist>
		</Twist>
	)
}

class ThreeD extends Component {
	render() { 
		// console.log(one)
		return (
			<section className="items-center justify-center pb-12 2xl:pb-18 pt-2 overflow-hidden">
				<div className="text-mainRed">
					<div className="flex justify-center py-6 xl:pb-4 xl:pt-4"><h1 className="text-mainYellow uppercase text-8xl font-black">3D</h1></div>
					<Swiper
					spaceBetween={35}
					slidesPerView={1.25}
					loop={true}
					grabCursor={true}
					centeredSlides={true}
					mousewheel={true}
					pagination={true}
					freeMode={true} 
					modules={[Mousewheel, Pagination, FreeMode]}
					className="cursor-grab active:cursor-grabbing"
					breakpoints={{
						640:{ slidesPerView: 1.5, spaceBetween: 25 },
						950:{ slidesPerView: 2, spaceBetween: 0 },
						1240:{ slidesPerView: 2.5},
						2000:{ slidesPerView: 3},
						2600:{ slidesPerView: 3.5},
						3000:{ slidesPerView: 4},
					}}

					>
						<SwiperSlide>
							<Card>
								<a href="https://l0n3ly.com/a">
									<img className="m-0 p-0 text-[0px] block lg:w-[75%] lg:h-[75%] axl:w-[65%] axl:h-[65%]" src="https://loadingl0n3ly.github.io/nickaloden.png"/>
								</a>
							</Card>
						</SwiperSlide>
						
						// Island Map
						<SwiperSlide>
							<Card>
								<a href="https://l0n3ly.com/IslandMap">
									<img className="m-0 p-0 text-[0px] block lg:w-[75%] lg:h-[75%] axl:w-[65%] axl:h-[65%]" src="https://cdn.discordapp.com/attachments/411914549533474826/1067561151208108103/islandMap.png"/>
								</a>
							</Card>
						</SwiperSlide>
						
					</Swiper>	
				</div>
			</section>
		);
	}
}

export default ThreeD;
