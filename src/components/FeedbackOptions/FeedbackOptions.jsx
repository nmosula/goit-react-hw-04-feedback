import PropTypes from "prop-types";
import Button from "components/Button";
import { ButtonList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (  
        <ButtonList>
            {options.map(option => (
                <Button
                    key={option}
                    option={option}
                    onLeaveFeedback={() => onLeaveFeedback(option)}
                />
            ))}
        </ButtonList>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;