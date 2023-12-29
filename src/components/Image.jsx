import React from 'react';

const Image = ({ url, onClick }) => {
  return (
    <img
      src={url}
      alt='flower'
      height={200}
      width={150}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    />
  );
};
export default Image;
