/**
 * About Component
 * 
 * Displays a brief description about the blog, including a logo image if provided.
 * 
 * Props:
 * - image: URL or imported image to display as the blog logo
 * - about: Text description to display about the blog
 * 
 * Connected Components:
 * - Used inside App.jsx as part of the blog main layout
 */

import React from 'react';

function About({ image, about }) {
    return (
      <aside>
        {image && <img src={image} alt="blog logo" />}
        <p>{about}</p>
      </aside>
    );
  }

export default About;