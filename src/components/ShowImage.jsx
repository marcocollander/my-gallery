import React from 'react';

const ShowImage = ({ url }) => (
  <div style={{ width: 400, margin: '50px auto' }}>
    <img src={url} alt='' width={400} height={600} />
  </div>
);

export default ShowImage;
