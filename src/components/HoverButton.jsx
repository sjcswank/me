const HoverButton = ({
  href,
  onClick,
  color,
  variant = 'solid',
  children,
  className = '',
  download,
  ariaLabel
}) => {
  const baseClasses = "px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900";

  const solidStyle = {
    backgroundColor: color,
    color: 'white',
    border: '2px solid transparent'
  };

  const outlineStyle = {
    backgroundColor: 'transparent',
    border: `2px solid ${variant === 'outline-gray' ? '#4B5563' : color}`,
    color: variant === 'outline-gray' ? 'inherit' : color
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.borderColor = color;
    e.currentTarget.style.boxShadow = `0 0 20px ${color}80`;
  };

  const handleMouseLeave = (e) => {
    if (variant === 'solid') {
      e.currentTarget.style.border = '2px solid transparent';
    } else if (variant === 'outline-gray') {
      e.currentTarget.style.borderColor = '#4B5563';
    } else {
      e.currentTarget.style.borderColor = color;
    }
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <a
      href={href}
      onClick={onClick}
      download={download}
      className={`${baseClasses} ${className}`}
      style={variant === 'solid' ? solidStyle : outlineStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default HoverButton;
