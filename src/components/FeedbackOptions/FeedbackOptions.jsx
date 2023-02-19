import propTypes from "prop-types";
import { ButtonList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ OnClickBtnGood, OnClickBtnNeutral, OnClickBtnBad }) => {
    return (  
        <ButtonList>
            <Button type="button" onClick={OnClickBtnGood}>Good</Button>
            <Button type="button" onClick={OnClickBtnNeutral}>Neutral</Button>
            <Button type="button" onClick={OnClickBtnBad}>Bad</Button>
        </ButtonList>
    )
}

FeedbackOptions.propTypes = {
    OnClickBtnGood: propTypes.func.isRequired,
    OnClickBtnNeutral: propTypes.func.isRequired,
    OnClickBtnBad: propTypes.func.isRequired,
}

export default FeedbackOptions;