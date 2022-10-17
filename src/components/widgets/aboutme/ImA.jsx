// import '~/assets/styles/base.css';


// <section class="mb-20">
// 	<div class="flex flex-col xl:grid xl:grid-cols-2 max-w-[85%] mx-auto pt-16 text-center xl:text-start">
// 		<div class="flex flex-col my-auto pb-4">
// 			<h1 class="text-6xl sm:text-8xl 3xl:text-[9rem] 5xl:text-[10rem] 6xl:text-[12rem] font-extrabold uppercase leading-[75%] tracking-[0.0125px] -mb-2 md:-mb-4">
// 				Hey.<br>I'm Fedor
// 			</h1>
// 			<h1 class="text-3xl">
// 				(aka LoadingL0n3ly)
// 			</h1>
// 		</div>
// 		<div class="mx-auto my-auto">
// 			<img src="https://cdn.discordapp.com/attachments/897947529335943199/1026680560149598228/76A21F94-9E18-42E5-92C3-1E17610F6770.jpg" alt="LoadingL0n3ly" class="rounded-2xl drop-shadow-2xl w-80 h-80 axl:w-96 axl:h-96"/>
// 		</div>
// 	</div>
// </section>

import Twist from '~/components/core/Twist';
import React, { Component } from 'react';

class ImA extends Component {
	render() { 
		return (
			<section className="mb-20">
				<div className="max-w-[85%] mx-auto pt-16 text-center xl:text-start">
					<h1 className="text-6xl sm:text-8xl 3xl:text-[9rem] 5xl:text-[10rem] 6xl:text-[12rem] font-extrabold uppercase leading-[75%] tracking-[0.0125px] -mb-2 md:-mb-4">{"I'm a"}</h1>
					<div className="flex flex-col xl:grid xl:grid-cols-2">
						<div className="flex flex-col my-auto pb-4">
							<h1 className="text-3xl">
								lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.  
							</h1>
						</div>
						<div className='mx-auto bg-[#E2b52b] text-[#731d1d] flex flex-col font-bold font-sans justify-center items-center rounded-2xl max-w-[35%] h-full drop-shadow-xl py-36'>
							Some sort of statistics idkasasdddddddddddddddddddddddddd asda sad asd asd as d as das d asd as d 
						</div>
				</div>
			</div>
		</section>
		);
	}
}

export default ImA;
