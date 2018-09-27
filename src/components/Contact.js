import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import './Contact.css';
import { CreateMarkup } from 'utils/Generic';

class Contact extends Component {
    render() {
        const { contact } = this.props;

        return (
            <Container className="Contact-container">
                <CreateMarkup innerHtml={contact.message} />
                <br />
                <br />
                <CreateMarkup innerHtml={contact.policy} />
                <br />
                <br />
                <CreateMarkup innerHtml={contact.copy} />
                <br />
                <br />
            </Container>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
