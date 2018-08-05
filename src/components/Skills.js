import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Progress,
    Row,
}
from 'reactstrap';
import moment from 'moment';

import './Skills.css';
import Data from 'data.js';

const skillRow = (key, obj) => {
    const name = (obj) => {
	if (!obj.date)
	    return obj.name;

	const age = moment.duration(moment().diff(moment(obj.date))).asYears();
	return obj.name + ' (' + age.toFixed() + ' yrs)';
    };

    return (
	<Row key={key} className="mb-2">
	  <Col xs="6">
	    {name(obj)}
	  </Col>
	  <Col xs="6">
	    <Progress striped color="info" value={obj.value} />
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
	  </CardBody>
	</Card>
    );
};

class Skills extends Component {
    render() {
	const { skills } = Data;

	// <CardTitle>{fancyTitle(skills.title, faCogs)}</CardTitle>

	return (
	    <Row>
	      <Col className="Skills-col">
		<Card>
		  <CardBody>
		    <Row>
		      <Col lg="4" xs="12" className="Skills-sub mt-2">
			{skillCard(skills.programming)}
		      </Col>
		      <Col lg="4" xs="12" className="Skills-sub mt-2">
			{skillCard(skills.tools)}
		      </Col>
		      <Col lg="4" xs="12" className="Skills-sub mt-2">
			{skillCard(skills.languages)}
		      </Col>
		    </Row>
		  </CardBody>
		</Card>
	      </Col>
	    </Row>
	);
    }
}

export default Skills;
