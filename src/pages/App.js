import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';

import Header from 'components/Header.js';
import Intro from 'components/Intro.js';
import Skills from 'components/Skills.js';
import Honors from 'components/Honors.js';
import Contact from 'components/Contact.js';
import './App.css';

class App extends Component {
    render() {
        const {
            owner,
            about,
            career,
            skills,
            honors,
            contact
        } = this.props.data;

        document.title = owner.name + ' Web CV';

        return (
            <div>
                <div className="App-header">
                    <Header owner={owner} />
                </div>
                <Element name="intro" className="element" />
                <Container className="App-intro mt-xs-0 mt-sm-4">
                    <Intro about={about} career={career} />
                </Container>
                <div className="App-skills">
                    <Element name="skills" className="element" />
                    <Skills skills={skills} />
                </div>
                <div className="App-honors">
                    <Element name="honors" className="element" />
                    <Honors honors={honors} />
                </div>
                <div className="App-contact">
                    <Element name="contact" className="element" />
                    <Contact contact={contact} />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    data: PropTypes.object.isRequired
};

export default App;
