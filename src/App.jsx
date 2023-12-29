import React, { useState, useEffect } from 'react';
import Image from './components/Image';
import ShowImage from './components/ShowImage';
import Form from './components/Form';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const App = () => {
  const [url, setUrl] = useState('');
  const [images, setImages] = useState([]);
  const [newImageUrl, setNewImageUrl] = useState('');

  let loadedImages = [];

  useEffect(() => {
    async function fetchData() {
      console.log('use effect');
      const querySnapshot = await getDocs(collection(db, 'Images'));
      querySnapshot.forEach(doc => {
        loadedImages.push(doc.data().url);
        console.log(doc.id, ' => ', doc.data().url);
      });
      setImages(loadedImages);
    }

    fetchData().then();
  }, []);

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    setUrl(prevState => (prevState = e.target.src));
  };

  const handelClickAdd = e => {
    e.preventDefault();
    e.stopPropagation();
    setImages([...images, newImageUrl]);
    const docRef = addDoc(collection(db, 'Images'), { url: newImageUrl });
  };

  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontFamily: 'Verdana',
          fontWeight: 'normal',
        }}
      >
        My Gallery
      </h1>
      <div
        style={{
          width: '500px',
          margin: '50px auto',
          textAlign: 'center',
          fontSize: '24px',
        }}
      >
        <Form
          value={newImageUrl}
          onChange={e => setNewImageUrl(e.target.value)}
          onClick={handelClickAdd}
        />
      </div>
      <div style={{ width: '90%', margin: '0 auto' }}>
        {images.map((item, index) => (
          <Image key={index} url={item} onClick={handleClick} />
        ))}
      </div>
      <ShowImage url={url} />
    </div>
  );
};

export default App;
