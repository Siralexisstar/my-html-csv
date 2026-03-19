import React from 'react';
import './Button.css';

export const Button = ({
  children,
  variant = 'primary', // 'primary', 'outline', 'text'
  size = 'md', // 'sm', 'md', 'lg'
  type = 'button',
  onClick,
  className = '',
  disabled = false,
  as: Component = 'button',
  ...rest
}) => {
  const classes = `btn btn--${variant} btn--${size} ${className}`;

  return (
    <Component
      className={classes}
      type={Component === 'button' ? type : undefined}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Component>
  );
};
