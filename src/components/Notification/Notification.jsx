import PropTypes from 'prop-types';
import { MessageText } from './Notification.styled';

const Notification = ({ message }) => {
    return <>{message && <MessageText>{message}</MessageText>}</>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;