import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module'; 

const Button = ({ children, title, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={styles.button}>
        {title}
      </button>
      {children}
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
