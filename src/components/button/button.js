import buttonStyles from './style.module.css';
import PropTypes from 'prop-types';


const Button = ({label,onClickHandler,icon,backgroundColor,textColor}) => {
    return (
        <div className={buttonStyles.button} 
            style={{backgroundColor:backgroundColor,color:textColor}}
            onClick={onClickHandler}
            >
            <div className={buttonStyles.icon}>
                { icon&&<img src={icon} height="20" width="20" alt="google"/>}
            </div> 
            <div className={buttonStyles.label}>
                {label}
            </div>
        </div>
    )
}

Button.propTypes={
    label:PropTypes.string.isRequired,
    onClickHandler:PropTypes.func.isRequired,
    icon:PropTypes.string,
    backgroundColor:PropTypes.string,
    textColor:PropTypes.string
}

Button.defaultProps={
    icon:"",
    textColor:`var(--text-color-dark)`,
    backgroundColor:`var(--background-color-light)`
}
export default Button