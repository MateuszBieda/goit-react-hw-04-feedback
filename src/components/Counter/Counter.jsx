


// import React, { Component } from 'react';
// import css from 'components/Counter/Counter.module.css';

// export class Counter extends Component {
//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positiveFeedback: 0,
//   };

//   constructor(props) {
//     super(props);
//     this.handleIncrementGood = this.handleIncrementGood.bind(this);
//     this.handleIncrementNeutral = this.handleIncrementNeutral.bind(this);
//     this.handleIncrementBad = this.handleIncrementBad.bind(this);
//     this.countTotalFeedback = this.countTotalFeedback.bind(this);
//     this.countPositiveFeedbackPercentage =
//       this.countPositiveFeedbackPercentage.bind(this);
//     this.countFeedback = this.countFeedback.bind(this);
//   }

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positiveFeedback: 0,
//   };

//   static propTypes = {
//     good: Number,
//     neutral: Number,
//     bad: Number,
//     total: Number,
//     positiveFeedback: Number,
//   };

//   handleIncrementGood() {
//     this.setState({ good: this.state.good + 1 });
//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//   }
//   handleIncrementNeutral() {
//     this.setState({ neutral: this.state.neutral + 1 });
//     this.countTotalFeedback();
//     this.countFeedback();
//   }

//   handleIncrementBad() {
//     this.setState({ bad: this.state.bad + 1 });
//     this.countTotalFeedback();
//     this.countFeedback();
//   }

//   countTotalFeedback() {
//     return this.setState({
//       total: this.state.good + this.state.neutral + this.state.bad + 1,
//     });
//   }

//   countPositiveFeedbackPercentage() {
//     return this.setState({
//       positiveFeedback: ((this.state.good + 1) / (this.state.total + 1)) * 100,
//     });
//   }

//   countFeedback() {
//     return this.setState({
//       positiveFeedback: (this.state.good / (this.state.total + 1)) * 100,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button
//           name="good"
//           type="button"
//           onClick={this.handleIncrementGood}
//           className={`${css.button} ${css.button1}`}
//         >
//           <span>Good</span>
//         </button>
//         <button
//           type="button"
//           onClick={this.handleIncrementNeutral}
//           className={`${css.button} ${css.button2}`}
//         >
//           <span>Neutral</span>
//         </button>
//         <button
//           type="button"
//           onClick={this.handleIncrementBad}
//           className={`${css.button} ${css.button3}`}
//         >
//           <span>Bad</span>
//         </button>

//         <p className={css.paragraph1}> Statistics</p>
//         <p className={css.feedback}>Good: {this.state.good}</p>
//         <p className={css.feedback}>Neutral: {this.state.neutral}</p>
//         <p className={css.feedback}>Bad: {this.state.bad}</p>
//         <p className={css.feedback}>Total: {this.state.total} </p>
//         <p className={css.feedback}>
//           Positive feedback: {this.state.positiveFeedback.toFixed(2)} %{' '}
//         </p>
//       </div>
//     );
//   }
// }
