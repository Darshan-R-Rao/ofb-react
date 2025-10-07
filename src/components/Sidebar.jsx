import React from 'react';
import { NavLink } from 'react-router-dom';

const pages = [
  { name: 'Introduction', path: '/introduction' },
  { name: 'Objective', path: '/objective' },
  { name: 'Theory', path: '/theory' },
  { name: 'Simulation', path: '/simulation' },
  { name: 'Procedure', path: '/procedure' },
  { name: 'Conclusion', path: '/conclusion' },
];

function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>OFB Mode Project</h2>
      <NavLink to="/" end><strong>Home</strong></NavLink>
      {pages.map((page) => (
        <NavLink key={page.name} to={page.path}>
          <strong>{page.name}</strong>
        </NavLink>
      ))}
    </nav>
  );
}

export default Sidebar;