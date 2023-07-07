import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h1 className='feedback_title'>Please leave feedback</h1>

      <ul className='feedback'>
        {options.map((option) => (
          <li key={option}>
            <button type='button' onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions;

