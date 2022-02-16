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
import { userAPI } from '../../apis/userAPI';
import UserModel from '../../models/user';
import { AccountStatus } from '../../constants/application';
import { userLocalData } from '../../utils/userUtils';


const LoginScreen = () => {

    const [togglePasswordVisibility, onTogglePassword] = useIconToggle();
    const history = useHistory();

    const userLoginInfo = useRef({
        "username": "",
        "password": ""
    })

    const { inputChangeHandler, formValues, error, onSubmitHandler } = useForm(userLoginInfo.current);
    
    const onSubmit=async ()=>{
        onSubmitHandler()
        if(formValues.username && formValues.password && !error.username && !error.password ){
            let loginData={
                "username":formValues.username,
                "password":formValues.password
            }
            let response=await userAPI.login(loginData)
            response=response.data.data
            let user=new UserModel({
                "userId":response._id,
                "userName":response.userName,
                "email":response.email,
                "name":response.name,
                "contact":response.contact,
                "currentStatus":AccountStatus.active,
                "token":response.token
            })
            userLocalData.setLocal({
                "key":"USER",
                "value":JSON.stringify(user)
            })
            navigateToHome()
        }
    }

    const navigateToHome = () => {
        history.replace(Routes.HOMEROUTE)
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
                        onClickHandler={onSubmit}
                    />
                </div>
            </center>
        </div>
    )
}

export default LoginScreen