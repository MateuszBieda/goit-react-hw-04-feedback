import css from 'components/FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, addFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={css.button}
          key={option}
          onClick={()=>addFeedback(option)}
        >
          {option}  
        </button>
      ))}
    </div>
  );
};


FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    addFeedback: PropTypes.func.isRequired,
};