import React, { Component, Fragment } from 'react';
import { Card, CardText, CardBody, CardTitle, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

import './Intro.css';
import { CreateMarkup, fancyTitle } from 'utils/Generic';
import Timeline from 'components/intro/Timeline';

const introColumn = (props) => {
    const { title, icon, id, Comp, cprops } = props;
    return (
        <Col xs="12" lg="6" className="Intro-col" id={id}>
            <Fragment>
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
                {introColumn({
                    title: about.title,
                    Comp: WhoAmI,
                    id: 'whoami',
                    cprops: { text: about.text }
                })}
                {introColumn({
                    title: career.title,
                    icon: faUserTie,
                    id: 'career',
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
