import toggleOnboardStyles from "./style.module.css";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const ToggleOnboard = ({label,linkLabel,link}) => {
    return (
        <div className={toggleOnboardStyles.moveToLogin}>
            <p>
                {label}
                <b>
                    <Link className={toggleOnboardStyles.navigateTo} to={link}> {linkLabel}</Link>
                </b>
            </p>
        </div>
    );
};

ToggleOnboard.propTypes={
    label:PropTypes.string.isRequired,
    linkLabel:PropTypes.string.isRequired,
    link:PropTypes.string.isRequired
}

export default ToggleOnboard;