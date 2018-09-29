import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown as scrollDownIcon } from '@fortawesome/free-solid-svg-icons';

import './Scroller.css';

const Scroller = () => {
    return (
        <Container className="Scroller d-flex justify-content-center">
            <FontAwesomeIcon icon={scrollDownIcon} />
        </Container>
    );
};

export default Scroller;
