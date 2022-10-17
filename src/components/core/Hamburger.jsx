import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import '~/assets/styles/modal.css';
import { Squeeze as Ham } from 'hamburger-react';
import { getHomePermalink } from '~/utils/permalinks';


const modalSize ={
	content:{
		top: '0%',
		left: '0%',
		right: 'auto',
		bottom: 'auto',
		border: '0px',
		backgroundColor: 'rgb(100 181 43)',
		width: '100vw',
		height: '100vh',
		padding: '0px',
		overflowY: 'hidden',
	},
	overlay: {
		height: '120%',
		backgroundColor: 'rgb(226 181 43)',
		zIndex: 1000,
		overflowY: 'hidden',
	},
}



function Hamburger() {
	const [modalIsOpen, setIsOpen] = useState(false);
	function openModal() {
		setIsOpen(true);
	  }
	
	
	  function closeModal() {
		setIsOpen(false);
	  }
	

		return (
		  <>
			<Ham toggle={openModal} rounded />
			<ReactModal 
				closeTimeoutMS={500}
			    isOpen={modalIsOpen}
			    onRequestClose={closeModal}
				shouldCloseOnOverlayClick={true}
			    style={modalSize}
				ariaHideApp={true}>
				<div className= "bg-mainYellow align-middle w-screen h-screen text-mainRed grid grid-cols-3 py-7 px-5">
					<div className="col-span-3 grid grid-cols-3 border-mainRed border-b-4 border-dashed max-h-[7.75%]">
						<div className="text-4xl md:text-[2.5rem] axl:text-5xl font-extrabold tracking-wide mt-1">
							l0n3ly
						</div>
						<div className="col-start-3 flex justify-end">
							<Ham rounded color="rgb(87 29 29)" toggled={closeModal} toggle={closeModal} />  
						</div>
						<div className="flex flex-col gap-y-10 col-span-3 pt-24 text-mainYellow font-bold tracking-wide text-[2rem] justify-center items-center uppercase">
							<a className="bg-mainRed rounded-2xl py-4 px-6" href={`https://fedorporttest.netlify.app/redir/ect/work`}>work</a>
							<a className="bg-mainRed rounded-2xl py-4 px-6" href={`https://fedorporttest.netlify.app/redir/ect/aboutme`}>about me</a>
							<a className="bg-mainRed rounded-2xl py-4 px-6" href={`https://fedorporttest.netlify.app/redir/ect/contact`}>contact</a>
						</div>
					</div>
				</div>
			</ReactModal>
		  </>
		);
	  }

export default Hamburger;