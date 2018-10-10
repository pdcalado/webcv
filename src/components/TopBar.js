import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import './TopBar.css';

const initial = {
    collapsed: true,
    show: false
};

export default class TopBar extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = initial;
        this.lastY = 0;
        this.isOnTop = false;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const currY = window.scrollY;

        if (currY > this.lastY && this.state.show) {
            this.setState({
                show: false,
                collapsed: true
            });
        }

        if (currY < this.lastY && !this.state.show)
            this.setState({ show: true });

        if (currY === 0 && this.state.show && !this.isOnTop) {
            this.isOnTop = true;
            this.props.onTop(true);
        }

        if (currY !== 0 && this.isOnTop) {
            this.isOnTop = false;
            this.props.onTop(false);
        }

        this.lastY = currY;
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const style = { top: this.state.show ? '0' : '-100px' };

        return (
            <Navbar id="main-nav" style={style} dark>
                <NavbarBrand href="#" className="mr-auto">
                    Home
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
