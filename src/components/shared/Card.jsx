const Card = ({ children, reverse }) => (
  <div className={`card ${reverse && "reverse"}`}>{children}</div>
);

Card.defaultProps = {
  reverse: false,
};

export default Card;
