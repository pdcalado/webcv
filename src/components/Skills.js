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
import PropTypes from 'prop-types';
import moment from 'moment';
import './Skills.css';

import { CreateMarkup } from 'utils/Generic';
import { colorLighter } from 'style.js';

const skillRow = (key, obj) => {
    const name = (obj) => {
	if (!obj.date)
	    return (
		<span className="Skills-name">
		  {obj.name}
		</span>
	    );

	const age = moment.duration(moment().diff(moment(obj.date))).asYears();
	return (
	    <div>
	      <span className="Skills-name">
		{obj.name + ' '}
	      </span>
	      <span className="Skills-age">
		{'(' + age.toFixed() + ' yrs)'}
	      </span>
	    </div>
	);
    };

    const pbstyle = { backgroundColor: colorLighter };

    return (
	<Row key={key} className="Skills-row mb-2">
	  <Col xs="6">
	    {name(obj)}
	  </Col>
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

Skills.propTypes = {
    skills: PropTypes.object
};

export default Skills;
