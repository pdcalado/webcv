import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';

import Header from 'components/Header.js';
import Intro from 'components/Intro.js';
import Skills from 'components/Skills.js';
import Honors from 'components/Honors.js';
import Contact from 'components/Contact.js';
import Linker from 'components/Linker.js';
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
                <div>
                    <Element name="intro" className="element" />
                    <Container className="App-intro mt-4">
                        <Intro about={about} career={career} />
                    </Container>
                </div>
                <div className="App-skills">
                    <Element name="skills" className="element" />
                    <Skills skills={skills} />
                </div>
                <div className="App-honors">
                    <Honors honors={honors} />
                </div>
                <div className="App-contact">
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
