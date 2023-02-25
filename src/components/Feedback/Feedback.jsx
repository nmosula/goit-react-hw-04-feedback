import React from "react";
import FeedbackOptions from "components/FeedbackOptions";
import Notification from "components/Notification";
import Section from "components/Section";
import Statistics from "components/Statistics";
import { Container } from './Feedback.styled';


class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    
    countTotalFeedback() {
        return Object.values(this.state).reduce((acc, value) => acc + value, 0);
    }

    countPositiveFeedbackPercentage() {
        let percentage = 0;

        if (this.countTotalFeedback() !== 0) percentage = Math.round((this.state.good / this.countTotalFeedback()) * 100);
        return percentage;
    }

    onLeaveFeedback = (event) => {
        return this.setState(prevState => ({
            [event]: prevState[event] + 1,
        }));
    }
    
    render() {
        return (
            <Container>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>

                {this.countTotalFeedback() > 0 ? (
                        <Statistics 
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            percentage={this.countPositiveFeedbackPercentage()}
                        />
                ) : (<Notification message="There is no feedback"/>)
                }
            </Container>
        )
    }
}

export default Feedback;