import React from 'react';
import { Link } from 'react-scroll';

import Scroller from 'components/Scroller';

const Linker = ({ to }) => {
    return (
        <Link
            className="test1"
            activeClass="active"
            to={to}
            spy={true}
            smooth={true}
            duration={500}
        >
            <Scroller />
        </Link>
    );
};

export default Linker;
