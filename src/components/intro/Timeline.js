import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase as jobIcon,
    faGraduationCap as eduIcon,
    faRocket as founderIcon
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { colorTitle } from 'style.js';

const TimelineCareer = ({ stages }) => {
    const itemList = stages.map((item, index) => {
        const icon = item.education
            ? eduIcon
            : item.founder
                ? founderIcon
                : jobIcon;

        const tsty = {
            fontWeight: 'bold',
            color: 'black'
        };

        const csty = {
            borderStyle: 'none',
            boxShadow: 'none'
        };

        const chsty = {
            background: 'none',
            color: colorTitle,
            margin: 0,
            padding: 0
        };

        const cntsty = {
            fontSize: '0.8em',
            color: 'grey',
            margin: 0,
            padding: 0
        };

        const role = (item) => {
            if (item.role) {
                return (
                    <div>
                        {item.role} <br />
                    </div>
                );
            }

            return null;
        };

        return (
            <TimelineEvent
                key={'tevent-' + index}
                title={item.entity}
                titleStyle={tsty}
                subtitle={item.dates}
                icon={<FontAwesomeIcon icon={icon} />}
                iconColor={colorTitle}
                container="card"
                style={csty}
                cardHeaderStyle={chsty}
                contentStyle={cntsty}
            >
                {role(item)}
                {item.location}
            </TimelineEvent>
        );
    });

    return <Timeline lineColor={colorTitle}>{itemList}</Timeline>;
};

TimelineCareer.propTypes = {
    stages: PropTypes.array.isRequired
};

export default TimelineCareer;
