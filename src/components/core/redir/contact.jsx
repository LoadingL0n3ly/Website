import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import { getHomePermalink } from '~/utils/permalinks';
let x = `${getHomePermalink()}#contact`;

class Contact extends Component {
	render() { 
		return (
			// <Redirect to={`${getHomePermalink()}#contact`}/>
			<Redirect to="https://l0n3ly.com#contact"/>
		);
	}
}
 
export default Contact;