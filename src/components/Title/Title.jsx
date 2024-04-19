import styles from './Title.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, children }) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Title;
