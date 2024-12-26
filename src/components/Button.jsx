export default function ButtonDesign(props) {
  const buttonStyles = {
    appearance: "none",
    backgroundColor: "#FFFFFF",
    borderRadius: "40em",
    borderStyle: "none",
    boxShadow: "#ADCFFF 0 -12px 6px inset",
    boxSizing: "border-box",
    color: "#000000",
    cursor: "pointer",
    display: "inline-block",
    fontFamily: "-apple-system, sans-serif",
    fontSize: "1.2rem",
    fontWeight: "700",
    height: "5vh",
    maxWidth : "fit-content",
    letterSpacing: "-.24px",
    margin: "0",
    outline: "none",
    padding: "5px",
    textAlign: "center",
    textDecoration: "none",
    transition: "all .15s",
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
  };

  const hoverStyles = {
    backgroundColor: "#FFC229",
    boxShadow: "#FF6314 0 -6px 8px inset",
    transform: "scale(1.125)",
  };

  const activeStyles = {
    transform: "scale(1.025)",
  };

  return (
    <button
      className="button-73"
      role="button"
      style={buttonStyles}
      onMouseEnter={(e) => {
        Object.assign(e.target.style, hoverStyles); // Apply hover styles
      }}
      onMouseLeave={(e) => {
        Object.assign(e.target.style, buttonStyles); // Revert to original styles
      }}
      onMouseDown={(e) => {
        Object.assign(e.target.style, activeStyles); // Apply active styles
      }}
      onMouseUp={(e) => {
        Object.assign(e.target.style, hoverStyles); // Revert to hover styles
      }}
    >
      {props.name}
    </button>
  );
}
