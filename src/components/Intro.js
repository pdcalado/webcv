import React, { Component, Fragment } from 'react';
import { Card, CardText, CardBody, CardTitle, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Element } from 'react-scroll';

import './Intro.css';
import { CreateMarkup, fancyTitle } from 'utils/Generic';
import Timeline from 'components/intro/Timeline';

const sectionName = (item) => {
    return item.toLowerCase().replace(' ', '');
};

const IntroColumn = (props) => {
    const { title, icon, Comp, cprops } = props;
    return (
        <Col xs="12" lg="6" className="Intro-col">
            <Fragment>
                <Element name={sectionName(title)} />
                <Card>
                    <CardBody>
                        <CardTitle>{fancyTitle(title, icon)}</CardTitle>
                        <Comp {...cprops} />
                    </CardBody>
                </Card>
            </Fragment>
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
                {IntroColumn({
                    title: about.title,
                    Comp: WhoAmI,
                    cprops: { text: about.text }
                })}
                {IntroColumn({
                    title: career.title,
                    icon: faUserTie,
                    Comp: Timeline,
                    cprops: { stages: career.stages }
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
