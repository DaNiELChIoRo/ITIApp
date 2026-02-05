import React from 'react';
import '../../styles/Button.css';

/**
 * Reusable Button component
 * @param {Object} props
 * @param {Function} props.onClick - Click handler
 * @param {string} props.variant - Button style variant (primary, secondary, danger)
 * @param {string} props.size - Button size (small, medium, large)
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 */
const Button = ({
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  children,
  ...props
}) => {
  const buttonClass = `button button-${variant} button-${size} ${className}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
