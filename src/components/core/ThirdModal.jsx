import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import '~/assets/styles/modal.css';
const modalSize ={
	content:{
		top: '40%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
		paddingTop: '35px',
		border: '0px',
		width: '90%',
		backgroundColor: 'rgba(0,0,0,0)',
	},
	overlay: {
		height: '120%',
		backgroundColor: 'rgba(0, 0, 0, 0.35)',
	}
}


class FirstModal extends Component {
	constructor () {
		super();
		this.state = {
		  showModal: false
		};
		
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	  }
	  
	  handleOpenModal () {
		this.setState({ showModal: true });
	  }
	  
	  handleCloseModal () {
		this.setState({ showModal: false });
	  }
	  
	  render () {
		return (
		  <>
			<button className='flex justify-center items-center select-none hover:scale-105 duration-150 ease-in-out' onClick={this.handleOpenModal}>
				<div className='flex justify-center items-center object-center bg-[#E2B52B] rounded-3xl drop-shadow-2xl align-middle px-14 md:px-28 xl:px-14 2xl:px-16 axl:px-20 3xl:px-24 4xl:px-[50%] 5.5xl:px-[77.5%] py-10 md:py-4 axl:py-6 3xl:py-4 5xl:py-[10%]'>
					<span className='flex align-middle'>
						<span className='text-7xl md:text-[9rem] xl:text-[7.5rem] 2xl:text-8xl 3xl:text-[9rem] oldstyle-nums font-extrabold'>25</span>
					</span>
					<span className='uppercase flex flex-col font-sans items-start justify-center'>
						<span className='text-2xl md:text-4xl xl:text-[1.5rem] 2xl:text-[2rem] 3xl:text-4xl font-semibold -mb-[0.9rem]'>million+</span>
						<span className='text-2xl md:text-4xl xl:text-[1.5rem] 2xl:text-[2rem] 3xl:text-4xl font-bold'>user sessions</span>
					</span>
				</div>
			</button>
			<ReactModal 
				closeTimeoutMS={500}
			    isOpen={this.state.showModal}
			    onRequestClose={this.handleCloseModal}
				shouldCloseOnOverlayClick={true}
			    style={modalSize}>
				<div className="bg-mainYellow rounded-3xl align-middle px-8 md:px-32 py-12 xl:py-4 flex flex-col xl:flex-row text-mainRed">
					<div className='flex justify-center items-center object-center pb-4'>
						<span className='flex align-middle'>
							<span className='text-7xl md:text-[9rem] oldstyle-nums font-extrabold'>10s</span>
						</span>
						<span className='uppercase flex flex-col font-sans items-start justify-center'>
							<span className='text-2xl md:text-4xl font-semibold -mb-[0.9rem]'>of Millions</span>
							<span className='text-2xl md:text-4xl font-bold'>User Play Sessions</span>
						</span>
					</div>
					<span className="text-[1.75rem] leading-6 md:leading-8 md:text-[2.5rem] font-medium self-center max-w-full xl:max-w-[50%] mx-auto xl:pt-4">
						My work has heavilly contributed to millions of meaningful and enjoyable play sessions on Roblox, delievering a fulfilling exprience for both the end users and my clients.
					</span>
				</div>
			</ReactModal>
		  </>
		);
	  }
	}

export default FirstModal;