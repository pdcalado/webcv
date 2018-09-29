import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

import './Intro.css';
import { CreateMarkup, fancyTitle } from 'utils/Generic';
import Timeline from 'components/intro/Timeline';

const IntroColumn = (title, Comp, props) => {
    return (
        <Col xs="12" lg="6" className="Intro-col">
            <Card>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <Comp {...props} />
                </CardBody>
            </Card>
        </Col>
    );
};

class Intro extends Component {
    render() {
        const { about, career } = this.props;

        const WhoAmI = ({ text }) => {
            return (
                <CardText>
                    <CreateMarkup innerHtml={text} />
                </CardText>
            );
        };

        return (
            <Row>
                {IntroColumn(fancyTitle(about.title, null), WhoAmI, {
                    text: about.text
                })}
                {IntroColumn(fancyTitle(career.title, faUserTie), Timeline, {
                    stages: career.stages
                })}
            </Row>
        );
    }
}

Intro.propTypes = {
    about: PropTypes.object.isRequired,
    career: PropTypes.object.isRequired
};

export default Intro;
