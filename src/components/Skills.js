import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Col, Progress, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Skills.css';

import { CreateMarkup } from 'utils/Generic';
import { colorLighter } from 'style.js';

const skillRow = (key, obj) => {
    const name = (obj) => {
        if (!obj.date) {
            return <span className="Skills-name">{obj.name}</span>;
        }

        const age = moment.duration(moment().diff(moment(obj.date))).asYears();
        return (
            <div>
                <span className="Skills-name">{obj.name + ' '}</span>
                <span className="Skills-age">
                    {'(' + age.toFixed() + ' yrs)'}
                </span>
            </div>
        );
    };

    const pbstyle = { backgroundColor: colorLighter };

    return (
        <Row key={key} className="Skills-row mb-2">
            <Col xs="6">{name(obj)}</Col>
            <Col xs="6">
                <Progress striped style={pbstyle} value={obj.value} />
            </Col>
        </Row>
    );
};

const skillCard = (obj) => {
    const rows = obj.list.map((item, idx) => {
        return skillRow(idx, item);
    });

    return (
        <Card>
            <CardTitle>{obj.title}</CardTitle>
            <CardBody>
                {rows}
                <Row className="Skills-desc mt-5">
                    <CreateMarkup innerHtml={obj.description} />
                </Row>
            </CardBody>
        </Card>
    );
};

class Skills extends Component {
    render() {
        const { skills } = this.props;

        const list = ['programming', 'tools', 'languages'].map((key) => {
            return (
                <Col
                    key={key}
                    lg="4"
                    xs="12"
                    id={key}
                    className="Skills-sub mt-2"
                >
                    {skillCard(skills[key])}
                </Col>
            );
        });

        return (
            <div className="Skills-col">
                <Card>
                    <CardBody>
                        <Row>{list}</Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

Skills.propTypes = {
    skills: PropTypes.object
};

export default Skills;
