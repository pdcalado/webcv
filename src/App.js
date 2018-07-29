import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './App.css';

import Intro from './Intro.js';
import Honors from './Honors.js';
import Contact from './Contact.js';
import { CreateMarkup } from './utils/Generic';
import SocialRow from './components/SocialRow';

import Data from './data.js';

class App extends Component {
    render() {
	const owner = Data.owner;

	return (
	    <div>
	      <div className="App-header">
		<Row>
		  <Col>
		    <p className="App-title">
		      {owner.name}
		    </p>
		  </Col>
		</Row>
		<Row>
		  <Col>
		    <p className="App-expertise mt-2">
		      <CreateMarkup innerHtml={owner.title} />
		    </p>
		  </Col>
		</Row>
		<Row className="App-social mt-3">
		  <Col>
		    <SocialRow social={owner.social} />
		  </Col>
		</Row>
	      </div>
	      <div>
		<Container className="App-intro mt-4">
		  <Intro />
		</Container>
	      </div>
	      <div className="App-honors">
		<Honors />
	      </div>
	      <div className="App-contact">
		<Contact />
	      </div>
	    </div>
	);
    }
}

export default App;
