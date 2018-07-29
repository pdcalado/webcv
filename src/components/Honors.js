import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

import './Honors.css';
import { fancyTitle } from 'utils/Generic';
import { faAward as honorIcon } from '@fortawesome/free-solid-svg-icons';

import Data from 'data.js';

class Honors extends Component {
    render() {
	const { honors } = Data;

	const itemList = honors.list.map((item, index) => {
	    const titleDecor = (title, link) => {
		if (!link)
		    return (<strong>{title}</strong>);
		return (
		    <strong className="Honors-link">
		      <a href={link}>{title}</a>
		    </strong>
		);
	    };

	    return (
		<Col xs="12" lg="4" key={index}>
		  <span className="Honors-desc">
		    <p>
		      {titleDecor(item.title, item.link)}<br />
		      <span className="Honors-subdesc">
			{item.entity}<br />
			{item.date}<br />
		      </span>
		    </p>
		  </span>
		</Col>
	    );
	});

	return (
	    <Container className="Honors-container">
	      <Row>
		<Col>
		  <span className="Honors-title">
		    {fancyTitle(honors.title, honorIcon)}
		  </span>
		</Col>
	      </Row>
	      <Row>
		{itemList}
	      </Row>
	    </Container>
	);
    }
}

export default Honors;
