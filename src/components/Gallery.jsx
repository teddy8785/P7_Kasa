import React from 'react';
import Card from './Card';
import data from '../Data.json';
import "../styles/Gallery.css";

function Gallery() {
  return (
    <div className="gallery">
   {
    data.map(post => (
      <Card 
      key={post.id}
      id={post.id}
      cover={post.cover}
      title={post.title}
      />
    ))
   }
    </div>
  );
}

export default Gallery;