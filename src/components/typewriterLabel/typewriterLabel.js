import { Typewriter } from "react-simple-typewriter";
import typewriterStyles from "./style.module.css";
import PropTypes from "prop-types";
import { TypeWriterTextList } from "../../constants/application";

const TypewriterLabel = ({label}) => {
return (
    <h2 className={typewriterStyles.heading}>
        {label}
        <span className={typewriterStyles.typeWriterHooha}>
        <Typewriter
            loop
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={1500}
            words={TypeWriterTextList}
        />
        </span>
        </h2>
    );
};

TypewriterLabel.propTypes={
    label:PropTypes.string.isRequired,
}

export default TypewriterLabel;