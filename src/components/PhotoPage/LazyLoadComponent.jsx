/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import photoStore from '../../stores/photo-store.tsx';
// import dataStore from './DataStore';
import PhotoItem from './PhotoItem.tsx';


const LazyLoadComponent = observer(() => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      await photoStore.fetchData();
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading && !isEndReached) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (photoStore.data.length >= 100) {
      setIsEndReached(true);
    }
  }, [photoStore.data]);

  console.log(photoStore.data)

  return (
    <div>
      {photoStore.data.map(item => (
        <PhotoItem
        key={item.id}
        cropPhoto={item.thumbnailUrl}
        title={item.title}
        url={item.url}
      />
      ))}
      {isLoading && <div>Loading...</div>}
      {isEndReached && <div>End of data</div>}
    </div>
  );
});

export default LazyLoadComponent;
