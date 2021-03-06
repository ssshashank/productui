import { ValidateInput } from '../constants/inputValidators';
import {useState} from 'react'

const useForm = (initialFormValues) => {
    
    
    const [formValues, setFormValues] = useState({...initialFormValues})
    const [error, setError] = useState({...initialFormValues})


    const validateInputHandler=(flag,name="",value="")=>{
        let tempError={...error};
        
            if(flag===1)
            {
                Object.entries(formValues).forEach((entry)=>{
                const [key,value]=entry;
                switchValidator(key,value,tempError) 
                })
            }if(flag===0){
                switchValidator(name,value,tempError)
            }
            setError(tempError)
    }

    const switchValidator=(name,value,tempError)=>{
        switch(name){
            case "name":
                {
                    let a=ValidateInput.required(value);
                    let b=ValidateInput.name(value);
                    if(a.errorMsg)
                        tempError["name"]=a.errorMsg;
                    else
                        tempError["name"]=b.errorMsg;
                    
                    break;
                }
            case "username":
                {
                    let a=ValidateInput.required(value);
                    let b=ValidateInput.username(value);
                    if(a.errorMsg)
                        tempError["username"]=a.errorMsg;
                    else
                        tempError["username"]=b.errorMsg;
                    setError(tempError)   
                    break;
                }
                case "contact":
                {
                    let a=ValidateInput.required(value);
                    let b=ValidateInput.contact(value);
                    if(a.errorMsg)
                        tempError["contact"]=a.errorMsg;
                    else
                        tempError["contact"]=b.errorMsg;
                    break;
                }
            case "email":
                {   
                    let a=ValidateInput.required(value);
                    let b=ValidateInput.email(value);
                    if(a.errorMsg)
                        tempError["email"]=a.errorMsg;
                    else
                        tempError["email"]=b.errorMsg;
                    break;
                }
            case "password":
                {
                    let a=ValidateInput.required(value);
                    let b=ValidateInput.password(value);
                    if(a.errorMsg)
                        tempError["password"]=a.errorMsg;
                    else
                        tempError["password"]=b.errorMsg;
                    break;
                }
            default:
                break;
        }

    }
    
    const inputChangeHandler=(e)=>{
       
        setFormValues({...formValues,[e.target.name]:e.target.value});
        validateInputHandler(0,e.target.name,e.target.value)
    }
    
    const onSubmitHandler=(e)=>{
       
        validateInputHandler(1)
    };
    
    
    return {inputChangeHandler,formValues,error,onSubmitHandler};

}

export default useForm