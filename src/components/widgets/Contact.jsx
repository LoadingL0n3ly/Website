import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NetlifyForm, Honeypot } from 'react-netlify-forms'
import { MdEmail } from 'react-icons/md/index.js';
import { FaTwitter, FaDiscord, FaCode, FaBriefcase } from 'react-icons/fa/index.js';
import { SiRoblox } from 'react-icons/si/index.js';


class Contact extends Component {
	render() {
		return (
			<section className="pt-12 pb-8">
				<div className="flex flex-col gap-y-8 xl:gap-x-16 xl:grid xl:grid-cols-2 mx-auto max-w-[85%] max-h-[85%] justify-center">
					<div className="row-span-1 bg-mainYellow text-mainRed rounded-3xl drop-shadow-2xl flex flex-col py-10 px-6 md:px-14 text-2xl font-bold md:max-w-[150%] lg:max-w-[85%] xl:max-w-[100%] mx-auto w-full h-full">
						<h1 className="text-center text-mainRed uppercase pb-4 drop-shadow-2xl font-extrabold text-5xl xl:text-7xl">contact form</h1>
						<NetlifyForm name='Contact' action='/thanks' honeypotName='bot-field'>
							{({ handleChange, success, error }) => (
							<>
								<Honeypot />
									{success && <p>Thanks for contacting me!</p>}
									{error && (
									<p>Sorry, we could not reach our servers. Please try again later.</p>
									)}
								<div className="flex flex-col xl:flex-row gap-x-2 mb-2">
									<label htmlFor='name' className="text-3xl">Name:</label>
									<input type='text' name='name' id='name' className="rounded-md text-mainYellow bg-mainRed bg-cover select-none outline-0 text-xl xl:w-[150%] px-4 py-1" onChange={handleChange} />
								</div>
								<div className="flex flex-col xl:flex-row gap-x-2 mb-4">
									<label htmlFor='email' className="text-3xl">Email:</label>
									<input type='email' name='email' id='email' className="rounded-md text-mainYellow bg-mainRed bg-cover select-none outline-0 xl:w-[150%] px-4 py-1" onChange={handleChange} />
								</div>
								<div className="flex flex-col gap-x-2 mb-4">
									<label htmlFor='message' className="text-3xl">Message:</label>
									<textarea
										type='text'
										name='message'
										id='message'
										rows='4'
										onChange={handleChange}
										className="rounded-md text-mainYellow bg-mainRed bg-cover select-none outline-0 text-xl px-4 py-1 drop-shadow-2xl"
									/>
								</div>
								<div>
									<button type='submit' className="bg-mainRed bg-cover text-mainYellow rounded-lg drop-shadow-lg py-2 px-4">Submit</button>
								</div>
							</>
							)}
						</NetlifyForm>
					</div>
					<div className="row-span-2">
						<div className="drop-shadow-2xl rounded-3xl flex flex-col mx-auto justify-center text-mainYellow bg-mainYellow text-center font-bold text-4xl md:text-[2.3rem] py-16 xl:py-10 2xl:py-14 lg:max-w-[85%] xl:max-w-[100%] g-full">
							<div className="max-w-[90%] xl:max-w-[75%] mx-auto flex flex-col justify-center items-center text-center gap-y-4 xl:gap-y-3">
								<a href="mailto:official.l0n3ly@gmail.com" className="bg-mainRed hover:bg-[#7c1f1f] active:bg-[#551515] hover:scale-105 duration-150 ease-in-out rounded-xl flex flex-row w-[125%] md:w-[250%] lg:w-[200%] 3xl:w-[300%] py-2 justify-center items-center"><MdEmail className="flex mr-3"/>Email</a>
								<a href="https://twitter.com/LoadingL0n3ly" className="bg-mainRed hover:bg-[#7c1f1f] active:bg-[#551515] rounded-xl hover:scale-105 duration-150 ease-in-out flex flex-row w-[125%] md:w-[250%] lg:w-[200%] 3xl:w-[300%] py-2 justify-center items-center"><FaTwitter className="flex mr-3"/>Twitter</a>
								<a href="https://discord.com/users/353316954716504068" className="bg-mainRed hover:bg-[#7c1f1f] active:bg-[#551515] hover:scale-105 duration-150 ease-in-out rounded-xl flex flex-row w-[125%] md:w-[250%] lg:w-[200%] 3xl:w-[300%] py-2 justify-center items-center"><FaDiscord className="flex mr-3"/>Discord</a>
								<a href="https://www.roblox.com/users/1045324707/profile" className="bg-mainRed hover:bg-[#7c1f1f] active:bg-[#551515] hover:scale-105 duration-150 ease-in-out rounded-xl flex flex-row w-[125%] md:w-[250%] lg:w-[200%] 3xl:w-[300%] py-2 justify-center items-center mt-4"><SiRoblox className="flex mr-3"/>Roblox</a>
								<a href="https://talent.roblox.com/creators/1045324707" className="bg-mainRed hover:bg-[#7c1f1f] active:bg-[#551515] hover:scale-105 duration-150 ease-in-out rounded-xl flex flex-row w-[125%] md:w-[250%] lg:w-[200%] 3xl:w-[300%] py-2 justify-center items-center"><FaBriefcase className="flex mr-3"/>TalentHub</a>
								<a href="https://devforum.roblox.com/u/loadingl0n3ly/summary" className="bg-mainRed hover:bg-[#7c1f1f] active:bg-[#551515] hover:scale-105 duration-150 ease-in-out rounded-xl flex flex-row w-[125%] md:w-[250%] lg:w-[200%] 3xl:w-[300%] py-2 justify-center items-center"><FaCode className="flex mr-3"/>DevForum</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}


export default Contact;