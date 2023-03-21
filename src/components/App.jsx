import React, {useState} from "react";
import { FeedbackOptions } from "./FeedBackOptions/FeedBackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const reviews = { good, neutral, bad };

  const onButtonClick = (option) => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1)
        break;
    
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage =() => {
    let positiveFeedback = good / (countTotalFeedback()) *100;
    if (!positiveFeedback) {
        return 0;
    }
    return Math.round(positiveFeedback);
  }

  
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
          options={Object.keys(reviews)}
          onLeaveFeedback={onButtonClick}>
          </FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? <Notification massage="There is no feedback"></Notification> : <Statistics
          good={good} 
          neutral={neutral} 
          bad={bad}
          total={countTotalFeedback()} 
          positivePercentage={countPositiveFeedbackPercentage()}>
          </Statistics>}
        </Section>
      </div>
    )
  
};

export default App;
