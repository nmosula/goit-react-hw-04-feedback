import { useState } from "react";
import FeedbackOptions from "components/FeedbackOptions";
import Notification from "components/Notification";
import Section from "components/Section";
import Statistics from "components/Statistics";
import { Container } from './Feedback.styled';


const Feedback = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const feedbacksKeys = Object.keys({ good, neutral, bad });
    
    const countTotalFeedback = () => {
        return good+neutral+bad;
    }

    const countPositiveFeedbackPercentage = () => {
        let percentage = 0;

        if (countTotalFeedback() !== 0) percentage = Math.round((good / countTotalFeedback()) * 100);
        return percentage;
    }

    const onLeaveFeedback = (event) => {
        switch (event) {
            case 'good':
                setGood(prevState => prevState + 1);
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;
            case 'bad':
                setBad(prevState => prevState + 1);
                break;
            default:
                break;
            }
    }

        return (
            <Container>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={feedbacksKeys}
                        onLeaveFeedback={onLeaveFeedback}
                    />
                </Section>

                {countTotalFeedback() > 0 ? (
                        <Statistics 
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={countTotalFeedback()}
                            percentage={countPositiveFeedbackPercentage()}
                        />
                ) : (<Notification message="There is no feedback"/>)
                }
            </Container>
        )
    
}

export default Feedback;