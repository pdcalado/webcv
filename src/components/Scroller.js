import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown as scrollDownIcon } from '@fortawesome/free-solid-svg-icons';

import './Scroller.css';

const Scroller = () => {
    return (
        <div className="Scroller">
            <FontAwesomeIcon icon={scrollDownIcon} />
        </div>
    );
};

export default Scroller;
