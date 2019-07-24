import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post';

import './styles.css';

const PostList = ({ items }) => {
  if (items === null) {
    return (
      <p>
          Посты отсутствуют
      </p>
    );
  }

  return (
    <ul className="post-list">
      {items.map((post) => {
        const {
          link, title, owner, question_id,
        } = post;
        const { profile_image } = owner;
        return (
          <li
            key={question_id}
            className="post"
          >
            <Post
              avatar={profile_image}
              link={link}
              title={title}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;

PostList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
};

PostList.defaultProps = {
  items: [],
};
