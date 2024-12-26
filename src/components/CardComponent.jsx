import React, { useEffect, useState } from 'react';
import ButtonDesign from './Button';
import myImage from '../assets/image.png';

// Custom hook to fetch image URL
const useImageFetcher = () => {
  const [imageUrl, setImageUrl] = useState(null); // Set initial state as null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const data = await response.json();
        setImageUrl(data.message);  // Set the fetched image URL
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch image');
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return { imageUrl, loading, error };  // Return imageUrl, loading, and error states
};

export default function CardComponent() {
  const styles = {
    item: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      alignItems: 'center',
    },
  };

  const { imageUrl, loading, error } = useImageFetcher();  // Use the custom hook here

  if (loading) return <div>Loading...</div>;  // Handle loading state
  if (error) return <div>{error}</div>;      // Handle error state
  const url = imageUrl;

// Split the string by '/' and get the part that represents the breed name (index 4)
const breedName = url.split('/')[4];



  return (
    <div style={styles.item}>
      {/* Render the image only when imageUrl is available */}
      <img
        alt="Random Dog"
        src={imageUrl || myImage}  // Use imageUrl or fallback to myImage
        style={{
          borderRadius: '50%',
          maxHeight: '30vh',
          minHeight: '30vh',
          minWidth: '30vh',
          maxWidth: '30vh',
        }}
      />
      <ButtonDesign name="Details" />
      <ButtonDesign name={breedName} />
      <ButtonDesign name="Details" />
    </div>
  );
}
