const Button = ({ children, type, version, isDisabled }) => (
  <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
    {children}
  </button>
);

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

export default Button;
