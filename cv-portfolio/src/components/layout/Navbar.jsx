import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  const navItems = [
    { label: 'Home', href: '#top' },
    { label: 'About me', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__list">
          {navItems.map((item) => (
            <li key={item.label} className="navbar__item">
              <a href={item.href} className="navbar__link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
