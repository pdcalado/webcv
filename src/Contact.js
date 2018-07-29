import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './Contact.css';
import { CreateMarkup } from './utils/Generic';

import Data from './data.js';

class Contact extends Component {
    render() {
	const  contact = Data.contact;

	return (
	    <Container className="Contact-container">
	      <CreateMarkup innerHtml={contact.message} />
	      <br /><br />
	      <CreateMarkup innerHtml={contact.policy} />
	      <br /><br />
	      <CreateMarkup innerHtml={contact.copy} />
	      <br /><br />
	    </Container>
	);
    }
}

export default Contact;
