import React, { useEffect, useState } from "react";
import ButtonDesign from "./Button";
import myImage from "../assets/image.png";

export default function CardComponent() {
  const styles = {
    item: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      alignItems: "center",
    },
  };

  const [imageUrl, setImageUrl] = useState(null); // Set initial state as null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [breedName, setBreedName] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        const data = await response.json();
        const breed = data.message.split("/")[4]; // Extract breed from the URL in the response
        setImageUrl(data.message); // Set the fetched image URL
        setBreedName(breed); // Set the breed name directly
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch image");
        setLoading(false);
      }
    };

    fetchImage();
  }, []); // Fetch data on initial mount

  if (loading) return <h4>LOADING......</h4>; // Handle loading state
  if (error) return <div>{error}</div>; // Handle error state

  // Capitalize the first letter of breedName, and ensure breedName is not null
  const capitalizedBreedName = breedName
    ? breedName.charAt(0).toUpperCase() + breedName.slice(1)
    : "Unknown Breed"; // Default to "Unknown Breed" if breedName is null

  return (
    <div style={styles.item}>
      {/* Render the image only when imageUrl is available */}
      <img
        alt="Random Dog"
        src={imageUrl || myImage} // Use imageUrl or fallback to myImage
        style={{
          borderRadius: "50%",
          maxHeight: "30vh",
          minHeight: "30vh",
          minWidth: "30vh",
          maxWidth: "30vh",
        }}
      />
      <ButtonDesign name="Details" eventName="details" />
      <ButtonDesign name={capitalizedBreedName} /> {/* Display capitalized breed name */}
      <ButtonDesign name="Add to favourites" eventName="details" />
    </div>
  );
}
