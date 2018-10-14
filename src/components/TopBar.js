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

const linkList = (links, setActive) => {
    return links.map((item, index) => {
        const block = item.sm ? 'd-block d-md-none' : 'd-block';
        const isActive = false; // item.active

        return (
            <NavItem key={index} className={block}>
                <NavLink
                    active={isActive}
                    onClick={() => {
                        setActive(item.tag);
                    }}
                    href={item.tag}
                >
                    <strong>{item.text}</strong>
                </NavLink>
            </NavItem>
        );
    });
};

const initial = {
    collapsed: true,
    show: false,
    activeIndex: 'home'
};

export default class TopBar extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.setActive = this.setActive.bind(this);
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

    setActive(index) {
        this.setState({
            collapsed: true,
            activeIndex: index
        });
    }

    render() {
        const style = { top: this.state.show ? '0' : '-100px' };

        const links = [
            {
                tag: '#intro',
                text: 'Intro',
                active: this.state.activeIndex === '#intro'
            },
            {
                tag: '#career',
                text: 'Career',
                active: this.state.activeIndex === '#career',
                mdOnly: true
            },
            {
                tag: '#skills',
                text: 'Skills',
                active: this.state.activeIndex === '#skills'
            },
            {
                tag: '#tools',
                text: 'Tools',
                active: this.state.activeIndex === '#tools',
                mdOnly: true
            },
            {
                tag: '#languages',
                text: 'Languages',
                active: this.state.activeIndex === '#languages',
                mdOnly: true
            },
            {
                tag: '#honors',
                text: 'Honors',
                active: this.state.activeIndex === '#honors'
            }
        ];

        return (
            <Navbar id="main-nav" style={style} dark>
                <NavbarBrand href="#" className="mr-auto">
                    <img src="icon-192.png" alt="Home" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav vertical pills>
                        {linkList(links, this.setActive)}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
