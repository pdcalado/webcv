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
import { NOT_SHOW, isTop, reduce, stateToNav } from './topbar/NavState.js';

const linkList = (links, setActive, activeIndex) => {
    return links.map((item, index) => {
        const block = item.mdOnly
            ? 'd-block d-md-none'
            : item.lgOnly
                ? 'd-md-block d-none'
                : 'd-block';
        const isActive = false; // item.tag === activeIndex

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
    condition: NOT_SHOW,
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
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const currY = window.scrollY;

        const actions = {
            scrollDown: currY > this.lastY,
            scrollUp: currY < this.lastY,
            yZero: currY === 0
        };

        const condition = reduce(this.state.condition, actions);

        this.lastY = currY;

        if (condition === this.state.condition) {
            return;
        }

        const topChange = isTop(condition) || isTop(this.state.condition);
        if (topChange) {
            this.props.onTop(isTop(condition));
        }

        this.setState({ condition });
    }

    toggleNavbar() {
        const condition = reduce(this.state.condition, { toggle: true });
        if (condition !== this.state.condition) {
            this.setState({ condition });
        }
    }

    setActive(index) {
        this.setState({
            condition: NOT_SHOW,
            activeIndex: index
        });
    }

    render() {
        const { show, collapsed } = stateToNav(this.state.condition);

        const style = { top: show ? '0' : '-100px' };
        const activeIndex = this.state.activeIndex;

        const links = [
            {
                tag: '#intro',
                text: 'Intro',
                lgOnly: true
            },
            {
                tag: '#whoami',
                text: 'Who am I?',
                mdOnly: true
            },
            {
                tag: '#career',
                text: 'Career',
                mdOnly: true
            },
            {
                tag: '#skills',
                text: 'Skills',
                lgOnly: true
            },
            {
                tag: '#programming',
                text: 'Programming',
                mdOnly: true
            },
            {
                tag: '#tools',
                text: 'Tools',
                mdOnly: true
            },
            {
                tag: '#languages',
                text: 'Languages',
                mdOnly: true
            },
            {
                tag: '#honors',
                text: 'Honors'
            }
        ];

        return (
            <Navbar id="main-nav" style={style} dark>
                <NavbarBrand href="#" className="mr-auto">
                    <img src="icon-192.png" alt="Home" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav vertical pills>
                        {linkList(links, this.setActive, activeIndex)}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
