import { StylesFeedbackOptions } from 'components/FeedbackOptions/StylesFeedbackOptions';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <StylesFeedbackOptions>
      <h1 className="main-tittle">Please leave feedback</h1>
      <button className="button" onClick={onClickGood}>
        Good
      </button>
      <button className="button" onClick={onClickNeutral}>
        Neutral
      </button>
      <button className="button" onClick={onClickBad}>
        Bad
      </button>
    </StylesFeedbackOptions>
  );
};

FeedbackOptions.propTypes = {
  onClickGood: PropTypes.func.isRequired,
  onClickNeutral: PropTypes.func.isRequired,
  onClickBad: PropTypes.func.isRequired,
};
