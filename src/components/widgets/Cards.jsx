import { HiCubeTransparent } from 'react-icons/hi/index'
import { AiOutlinePicture } from 'react-icons/ai/index'
import { CgCamera } from 'react-icons/cg/index'
import Twist from '~/components/core/Twist';
import React, { Component } from 'react';
import { get3dPermalink, get2dPermalink, getVideoPermalink } from '~/utils/permalinks';


class Cards extends Component {
	
	render() { 
		return (
			<section className="pb-12 2xl:pb-20 axl:pb-24 pt-8">
				<div className="mx-auto text-center text-mainRed flex flex-col gap-y-12 xl:grid xl:grid-cols-3 xl:gap-x-16 5xl:gap-x-24 text-6xl 2xl:text-7xl 4xl:text-8xl 5xl:text-9xl md:max-w-[85%] 3xl:max-w-[75%] items-center">
					<h1 className="text-[4rem] xl:text-8xl mx-auto text-center text-mainYellow col-span-3 uppercase flex items-center xl:pb-4"><span>not <span className="font-black text-[3.5rem] xl:text-8xl">convinced</span>?</span></h1>
					<Twist className="col-start-1" >
						<Twist options={{ max: 10, perspective: 1000, scale: 1}}>
							<a href={get3dPermalink()} className='bg-[#E2b52b] text-[#731d1d] flex flex-col font-bold font-sans justify-center items-center rounded-2xl drop-shadow-xl py-36 lg:py-48 xl:py-40 2xl:py-44 3xl:py-52 4xl:py-64 5xl:py-72 6xl:py-80 px-[88.6795px] md:px-36 xl:px-44 2xl:px-36 axl:px-24 3xl:px-32 5xl:px-0'>      
								<HiCubeTransparent className="text-[9rem] md:text-[10rem] 2xl:text-[12rem] 4xl:text-[14rem]"/>
								<h1 className='select-none'>3D</h1>
							</a>
						</Twist>
					</Twist>
					<Twist className = "col-start-2" >
						<Twist options={{ max: 10, perspective: 1000, scale: 1}}>
							<a href={get2dPermalink()} className='bg-[#E2b52b] text-[#731d1d] flex flex-col font-bold font-sans justify-center items-center rounded-2xl drop-shadow-xl py-36 lg:py-48 xl:py-40 2xl:py-44 3xl:py-52 4xl:py-64 5xl:py-72 6xl:py-80 px-[88.6795px] md:px-36 xl:px-44 2xl:px-36 axl:px-24 3xl:px-32 5xl:px-0'>      
								<AiOutlinePicture className="text-[9rem] md:text-[10rem] 2xl:text-[12rem] 4xl:text-[14rem]" />
								<h1 className='select-none'>2D</h1>
							</a>
						</Twist>
					</Twist>
					<Twist className = "col-start-3" >
						<Twist options={{ max: 10, perspective: 1000, scale: 1}}>
							<a href={getVideoPermalink()} className='bg-[#E2b52b] text-[#731d1d] flex flex-col font-bold font-sans justify-center items-center rounded-2xl drop-shadow-xl py-36 lg:py-48 xl:py-40 2xl:py-44 3xl:py-52 4xl:py-64 5xl:py-72 6xl:py-80 px-20 md:px-36 xl:px-44 2xl:px-36 axl:px-24 3xl:px-32 5xl:px-0'>
								<CgCamera className="text-[9rem] md:text-[10rem] 2xl:text-[12rem] 4xl:text-[14rem]" />
								<h1 className='select-none'>Video</h1>
							</a>
						</Twist>
					</Twist>
				</div>
			</section>
		);
	}
}

export default Cards;
