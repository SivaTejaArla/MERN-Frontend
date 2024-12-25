import ButtonDesign from "./Button";
import myImage from '../assets/image.png';
export default function CardComponent() {
  const styles = {
    item: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      alignItems : 'center'
    },
  };

  return (
  
        <div style={styles.item}>
          <img alt="Image" src={myImage} style={{borderRadius : '50%'}}></img>
          <ButtonDesign name="Details" />
          <ButtonDesign name="Details" />
          <ButtonDesign name="Details" />
    </div>
  );
}
