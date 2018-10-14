import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import Header from 'components/Header.js';
import Intro from 'components/Intro.js';
import Skills from 'components/Skills.js';
import Honors from 'components/Honors.js';
import Contact from 'components/Contact.js';
import TopBar from 'components/TopBar.js';
import { headerPad } from 'style.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.onTop = this.onTop.bind(this);
        this.state = { pt: headerPad };
    }

    onTop(top) {
        this.setState({
            pt: top ? '4.0em' : headerPad
        });
    }

    render() {
        const {
            owner,
            about,
            career,
            skills,
            honors,
            contact
        } = this.props.data;

        const onTop = this.onTop;

        document.title = owner.name + ' Web CV';

        return (
            <div data-spy="scroll" data-target="#main-nav" data-offset="0">
                <div className="App-topbar">
                    <TopBar onTop={onTop} />
                </div>
                <div
                    style={{ paddingTop: this.state.pt }}
                    className="App-header"
                >
                    <Header owner={owner} />
                </div>
                <Container id="intro" className="App-intro mt-xs-0 mt-sm-4">
                    <Intro about={about} career={career} />
                </Container>
                <div id="skills" className="App-skills">
                    <Skills skills={skills} />
                </div>
                <div id="honors" className="App-honors">
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
