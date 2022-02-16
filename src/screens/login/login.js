import { useRef } from 'react';
import Button from '../../components/button/button';
import Routes from '../../constants/routes';
import loginStyles from './style.module.css';
import useIconToggle from '../../hooks/useIconToggle';
import { PasswordIconAiFillEye, PasswordIconAiFillEyeInvisible } from '../../utils/utilsIcon';
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import ToggleOnboard from '../../components/toggleOnboard/toggleOnboard';
import TypewriterLabel from '../../components/typewriterLabel/typewriterLabel';
import InputField from '../../components/inputField/inputField';
import { ValidateInput } from '../../constants/inputValidators';
import { Route } from 'react-router-dom';


const LoginScreen = () => {

    const [togglePasswordVisibility, onTogglePassword] = useIconToggle();
    const history = useHistory();

    const userLoginInfo = useRef({
        "username": "",
        "password": ""
    })

    const { inputChangeHandler, formValues, error, onSubmitHandler } = useForm(userLoginInfo.current);

    const navigateToHome = () => {
        history.push(Routes.HOMEROUTE)
    }
    return (
        <div className={loginStyles.signupSection}>
            <ToggleOnboard label="New here? " linkLabel="Signup" link={Routes.SIGNUPROUTE} />
            <center>
                <div className={loginStyles.signupSectionBody}>
                    <TypewriterLabel label="Log in to " />
                    <InputField
                        type="text"
                        name="username"
                        value={formValues["username"]}
                        placeholder="username"
                        onChangeHandler={inputChangeHandler}
                        validators={[ValidateInput.required, ValidateInput.username]}
                        errorMsg={error["username"]}
                    />

                    <InputField
                        type={togglePasswordVisibility ? "password" : "text"}
                        name="password"
                        value={formValues["password"]}
                        placeholder="password"
                        onChangeHandler={inputChangeHandler}
                        trailingIcon={togglePasswordVisibility?<PasswordIconAiFillEyeInvisible/>:<PasswordIconAiFillEye/>}
                        onIconToggleHandler={onTogglePassword}
                        validators={[ValidateInput.required, ValidateInput.password]}
                        errorMsg={error["password"]}
                    />
                    <br />
                    <Button
                        backgroundColor={`var(--color-lavender)`}
                        textColor={`var(--text-color-purity)`}
                        label="Get Started"
                        onClickHandler={onSubmitHandler}
                    />


                </div>
            </center>
        </div>
    )
}

export default LoginScreen