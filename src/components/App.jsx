//import { Counter } from 'components/Counter/Counter.jsx';
import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions.jsx';
import { Section } from 'components/Section/Section.jsx';
import { Notification } from 'components/Notification/Notification.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = stateName => {
    this.setState(prevState => ({
      [stateName]: prevState[stateName] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return (this.state.good / totalFeedback) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section  title="Please leave feedback">
          <FeedbackOptions options={options} addFeedback={this.addFeedback} />
        </Section>
        <Section title="Statistics" >
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
