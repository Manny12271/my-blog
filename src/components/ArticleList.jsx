/**
 * ArticleList Component
 * 
 * Displays a list of blog posts/articles.
 * 
 * Props:
 * - posts: Array of blog post objects to render
 * 
 * Connected Components:
 * - Used inside App.jsx to show all articles on the blog
 */

import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map(post => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;