import React from 'react';
import PropTypes from 'prop-types';

const Todo = ( { onclick, completed, text } ) => (
    <li
        onclick={onclick}
        style={{
            textDecoration: completed? 'line-through':'none'
        }}
    >
        {text}
    </li>
);

Todo.propTyles = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;

