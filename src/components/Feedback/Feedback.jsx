import React from "react";
import "./Feedback.styled.css";

class Feedback extends React.Component {
    handleBtnGood() {
        console.log("Good");
    }

    handleBtnNeutral() {
        console.log("Neutral");
    }

    handleBtnBad() {
        console.log("Bad");
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

                <h3>Statistics</h3>
            </div>
        )
    }
}

export default Feedback;
