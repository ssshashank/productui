import PropTypes from 'prop-types';
import { Fragment,useEffect,useRef,useState } from 'react';
import inputFieldStyles from './style.module.css';


const InputField = ({type,name,placeholder,onChangeHandler,value,errorMsg,trailingIcon,onIconToggleHandler,validators}) => {

    const inputRef = useRef();
    const [error, setError] = useState(errorMsg);
    
    useEffect(() => {
        setError(errorMsg)
        return () => {
            setError("")
        }
    }, [errorMsg])


    return (
        <Fragment>
            <div className={inputFieldStyles.inputFieldBox}>
                <input 
                ref={inputRef}
                className={!(error==="")?`${inputFieldStyles.inputField} ${inputFieldStyles.inputFieldError}`:inputFieldStyles.inputField}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
                />
                {
                    trailingIcon&&<span style={{position:"absolute",right:"12%"}} 
                        onClick={onIconToggleHandler}>{trailingIcon}
                    </span>
                }
                
            </div>
            {error&&<div className={inputFieldStyles.inputErrorMsg}>* {error}</div>}
        </Fragment>
    )
}


InputField.propTypes ={
    type:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    trailingIcon:PropTypes.element,
    placeholder:PropTypes.string.isRequired,
    onChangeHandler:PropTypes.func.isRequired,
    onIconToggleHandler:PropTypes.func,
    validators:PropTypes.array.isRequired,
    errorMsg:PropTypes.string,
    value:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
}
export default InputField