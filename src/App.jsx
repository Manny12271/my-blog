import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';
import posts from './blogData';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="blog-container">
      <Header name="Manuel's Blog" />
      <About
        image={logo}
        about="Welcome to my blog where I share everything I learn about coding!"
      />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
