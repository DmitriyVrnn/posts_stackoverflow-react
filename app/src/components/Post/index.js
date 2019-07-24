import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Post = ({
  link, title, avatar,
}) => (
  <a href={link} className="post-link">
    <img className="post-avatar" src={avatar} alt={avatar} />
    <h2 className="post-title">{title}</h2>
  </a>
);

export default Post;

Post.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
};

Post.defaultProps = {
  link: '',
  title: '',
  avatar: '',
};
