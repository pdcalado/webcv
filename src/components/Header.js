import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import { CreateMarkup } from 'utils/Generic';
import SocialRow from 'components/header/SocialRow';
import Linker from 'components/Linker';

import './Header.css';

const Header = ({ owner }) => {
    return (
        <Row>
            <Col xs="12">
                <p className="Header-title">{owner.name}</p>
            </Col>
            <Col xs="12">
                <p className="Header-expertise mt-2">
                    <CreateMarkup innerHtml={owner.title} />
                </p>
            </Col>
            <Col xs="12" className="Header-social mt-3">
                <SocialRow social={owner.social} />
            </Col>
            <Col xs="12">
                <Linker to="intro" />
            </Col>
        </Row>
    );
};

Header.propTypes = {
    owner: PropTypes.object.isRequired
};

export default Header;
