import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='social-icons'>
      <FontAwesomeIcon
        icon={faTwitterSquare}
        item={faTwitterSquare}
        ano={faTwitterSquare}
        bot={faTwitterSquare}
      />
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faInstagramSquare} />
      <FontAwesomeIcon icon={faGithubSquare} />
    </div>
  );
};

export default Footer;
