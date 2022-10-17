import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import { getHomePermalink } from '~/utils/permalinks';
let x = `${getHomePermalink()}#contact`;

class Contact extends Component {
	render() { 
		return (
			// <Redirect to={`${getHomePermalink()}#contact`}/>
			<Redirect to="https://fedorporttest.netlify.app#contact"/>
		);
	}
}
 
export default Contact;