/**
 * Header Component
 * 
 * Renders the main heading/title of the blog.
 * 
 * Props:
 * - name: The blog's name or title to display
 * 
 * Connected Components:
 * - Used inside App.jsx as the blog header
 */

import React from 'react';

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;