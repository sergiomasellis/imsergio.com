import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface SocialLink {
  href: string;
  icon: any;
  label: string;
}

const SocialComponent: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      href: "https://twitter.com/sergiomasellis",
      icon: faTwitter,
      label: "Twitter"
    },
    {
      href: "https://github.com/sergiomasellis",
      icon: faGithub,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/sergiomasellis/",
      icon: faLinkedin,
      label: "LinkedIn"
    }
  ];

  return (
    <div className="social">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialComponent;