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
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage() {
        let percentage = 0;

        if (this.countTotalFeedback() !== 0) percentage = Math.round((this.state.good / this.countTotalFeedback()) * 100);
        return percentage;
    }

    handleBtnGood = () => {
        this.setState(currentState => ({
            good: currentState.good + 1,
        }))
    }

    handleBtnNeutral = () => {
        this.setState(currentState => ({
            neutral: currentState.neutral + 1,
        }))
    }

    handleBtnBad = () => {
        this.setState(currentState => ({
            bad: currentState.bad + 1,
        }))
    }
    
    render() {
        return (
            <Container>
                <Section title="Please leave feedback">

                    <FeedbackOptions
                        OnClickBtnGood={this.handleBtnGood}
                        OnClickBtnNeutral={this.handleBtnNeutral}
                        OnClickBtnBad={this.handleBtnBad}
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
