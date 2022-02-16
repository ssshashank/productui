import { useRef } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/button/button';
import InputField from '../../components/inputField/inputField';
import signupStyles from "./style.module.css";
import TypewriterLabel from '../../components/typewriterLabel/typewriterLabel';
import ToggleOnboard from '../../components/toggleOnboard/toggleOnboard';
import Routes from '../../constants/routes';
import useIconToggle from '../../hooks/useIconToggle';
import { PasswordIconAiFillEye, PasswordIconAiFillEyeInvisible } from '../../utils/utilsIcon';
import { ValidateInput } from '../../constants/inputValidators';
import useForm from '../../hooks/useForm';
import { userAPI } from '../../apis/userAPI';
import UserModel from '../../models/user';
import { AccountStatus } from '../../constants/application';
import { userLocalData } from '../../utils/userUtils';

const SignupScreen = () => {
    
    const history=useHistory();
 
    

    const [togglePasswordVisibility,onTogglePassword]=useIconToggle();  

    const userSignupInfo = useRef({
        "name":"",
        "username":"",
        "email":"",
        "contact":"",
        "password":""
    })
    
    const {inputChangeHandler,formValues,error,onSubmitHandler}=useForm(userSignupInfo.current);
    const onSubmit=async ()=>{
        onSubmitHandler()
        if(formValues.username && formValues.password && !error.username && !error.password ){
            let signupData={
                "name":formValues.name,
                "username":formValues.username,
                "email":formValues.email,
                "contact":formValues.contact,
                "password":formValues.password
            }
            let response=await userAPI.signup(signupData)
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
        <div className={signupStyles.signupSection}>
                <ToggleOnboard label="Already a member? " linkLabel="Login" link={Routes.LOGINROUTE}/>
                <center>
                    <div className={signupStyles.signupSectionBody}>
                    <TypewriterLabel label="Sign up with "/>
                        <form onSubmit={onSubmitHandler}>
                        <InputField 
                            type="text" 
                            name="name"   
                            value={formValues["name"]} 
                            placeholder="name"
                            onChangeHandler={inputChangeHandler}
                            validators={[ValidateInput.required,ValidateInput.username]}
                            errorMsg={error["username"]}
                        />  
                        <InputField 
                            type="text" 
                            name="username"   
                            value={formValues["username"]} 
                            placeholder="username"
                            onChangeHandler={inputChangeHandler}
                            validators={[ValidateInput.required,ValidateInput.username]}
                            errorMsg={error["username"]}
                        />  
                        
                        <InputField 
                                type="email" 
                                name="email"   
                                value={formValues["email"]}
                                placeholder="email"
                                onChangeHandler={inputChangeHandler}
                                validators={[ValidateInput.required,ValidateInput.email]}
                                errorMsg={error["email"]}
                        />
                        <InputField 
                            type="text" 
                            name="contact"   
                            value={formValues["contact"]} 
                            placeholder="contact"
                            onChangeHandler={inputChangeHandler}
                            validators={[ValidateInput.required,ValidateInput.username]}
                            errorMsg={error["username"]}
                        />  

                        <InputField 
                            type={togglePasswordVisibility?"password":"text"} 
                            name="password"   
                            value={formValues["password"]} 
                            placeholder="password"
                            trailingIcon={togglePasswordVisibility?
                                <PasswordIconAiFillEyeInvisible/>:
                                <PasswordIconAiFillEye/>}
                            onIconToggleHandler={onTogglePassword}
                            onChangeHandler={inputChangeHandler}
                            validators={[ValidateInput.required,ValidateInput.password]}
                            errorMsg={error["password"]}
                        />
                        
                        
                        <Button
                            backgroundColor={`var(--color-lavender)`}
                            textColor={`var(--text-color-purity)`}
                            label="Signup" 
                            onClickHandler={onSubmit}
                        />  
                        
                        </form>                  
                    </div>
                </center>
            </div>
    )
}

export default SignupScreen