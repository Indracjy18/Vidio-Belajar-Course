const Button = ({ children, type = "button", onClick, src, className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {src && <img src={src} alt="" />}
      {children}
    </button>
  );
};

export default Button;
