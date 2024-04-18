import React from 'react';

const PhotoItem = ({ id, title, url, cropPhoto }) => {
  return (
    <li key={id}>
      <img src={cropPhoto} alt={title} />
      <span>{title}</span>
    </li>
  )
}

export default PhotoItem;
