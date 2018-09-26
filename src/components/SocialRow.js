import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,
         faGithub,
         faFacebook,
         faMedium } from '@fortawesome/free-brands-svg-icons';

const SocialRow = ({social}) => {
    const icons = {
        linkedin: faLinkedin,
        github: faGithub,
        facebook: faFacebook,
        medium: faMedium
    };

    const list = Object.keys(social).map(key => {
        return (
            <li key={key}>
              <span>
                <a href={social[key]}>
                  <FontAwesomeIcon icon={icons[key]} />
                </a>
              </span>
            </li>
        );
    });

    return (
        <ul>
          {list}
        </ul>
    );
};

SocialRow.propTypes = {
    social: PropTypes.object.isRequired
};

export default SocialRow;
