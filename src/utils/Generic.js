import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// CreateMarkup utility for inserting text as html
export const CreateMarkup = ({innerHtml}) => { 
    return (
        <span className="markup"
              dangerouslySetInnerHTML={{__html: innerHtml}}>
        </span>
    );
};

CreateMarkup.propTypes = {
    innerHtml: PropTypes.string.isRequired
};

// Create a fancy title with an icon right next to it
export const fancyTitle = (text, icon) => {
    const ricon = (obj) => {
        if (!obj) {
            return null;
	}

        return (
          <li>
            <span>
              <FontAwesomeIcon icon={obj} />
            </span>
          </li>
        );
    };

    return (
        <ul>
          <li>
            {text}
          </li>
          {ricon(icon)}
        </ul>
    );
};
