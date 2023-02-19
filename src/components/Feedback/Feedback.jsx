import React from "react";
import "./Feedback.styled.css";
import Statistics from "./Statistics";

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
            <div className="container">
                <h2>Please leave feedback</h2>

                <div className="buttonList">
                    <button type="button" onClick={this.handleBtnGood}>Good</button>
                    <button type="button" onClick={this.handleBtnNeutral}>Neutral</button>
                    <button type="button" onClick={this.handleBtnBad}>Bad</button>
                </div>

                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} percentage={this.countPositiveFeedbackPercentage()} />


            </div>
        )
    }
}

export default Feedback;
