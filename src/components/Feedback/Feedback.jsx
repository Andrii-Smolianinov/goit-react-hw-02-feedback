import { Component } from 'react';
import { StylesFeedback } from 'components/Feedback/StylesFeedback';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  clickGood = () => {
    this.setState(prev => ({ good: prev.good + 1 }));
  };

  clickNeutral = () => {
    this.setState(prev => ({ neutral: prev.neutral + 1 }));
  };

  clickBad = () => {
    this.setState(prev => ({ bad: prev.bad + 1 }));
  };

  render() {
    return (
      <StylesFeedback>
        <FeedbackOptions
          onClickGood={this.clickGood}
          onClickNeutral={this.clickNeutral}
          onClickBad={this.clickBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positive={this.state.positive}
        />
      </StylesFeedback>
    );
  }
}

