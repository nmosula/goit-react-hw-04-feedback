import propTypes from "prop-types";

const Statistics = ({ good=0, neutral=0, bad=0, total=0, percentage=0 }) => {
    return (
            <div className="statisticList">
                <h3>Statistics</h3>
            
                <div>Good: {good}</div>
                <div>Neutral: {neutral}</div>
                <div>Bad: {bad}</div>
                <div>Total: {total}</div>
                <div>Positive feedback: {percentage}%</div>
            </div>
    )
}

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    percentage: propTypes.number.isRequired
}

export default Statistics;