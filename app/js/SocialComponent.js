import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class SocialComponent extends Component {

    render() {
        return (
            <div className={`social`}>
               <a href="https://twitter.com/sergiomasellis"> <FontAwesomeIcon icon={faTwitter} /></a>
               <a href="https://github.com/sergiomasellis"> <FontAwesomeIcon icon={faGithub} /></a>
               <a href="https://www.linkedin.com/in/sergiomasellis/"> <FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        );
    }
}

export default SocialComponent;