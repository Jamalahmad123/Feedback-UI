const Header = ({ title, bgColor, textColor }) => {
  // Styles
  const styles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  // JSX
  return (
    <header style={styles}>
      <div className="container">
        <h2>{title}</h2>
      </div>
      
    </header>
  );
};

// default props
Header.defaultProps = {
  title: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

export default Header;
