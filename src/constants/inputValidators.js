import { ContactRegEx, EmailRegEx, NameRegEx, PasswordRegEx, UsernameRegEx } from "./application";

export class  ValidateInput{
    
    static name(value){
        if(!new RegExp(NameRegEx.length).test(value)){
            return{
                "isError":true,
                "errorMsg":"Length should be greater than 1."   
            }
        }else{
            return{
                "isError":false,
                "errorMsg":""   
            }
        }
    }
    static contact(value){
        if(!new RegExp(ContactRegEx.length).test(value)){
            return{
                "isError":true,
                "errorMsg":"Length should be equal to 10."   
            }
        }else{
            return{
                "isError":false,
                "errorMsg":""   
            }
        }
    }
    static email(value){
        if(!new RegExp(EmailRegEx.email).test(value)){
            return{
                "isError":true,
                "errorMsg":"Email is not valid."   
            }
        }else{
            return{
                "isError":false,
                "errorMsg":""   
            }
        }
    }


    static username(value){
        if(!new RegExp(UsernameRegEx.length).test(value)){
            return{
                "isError":true,
                "errorMsg":"Length should be greater than 1."   
            }
        }
        else{
            return{
                "isError":false,
                "errorMsg":""   
            }
        }
    } 

    static required(value){
        if((!value || !value.toString().trim().length)){
            return {
                "isError":true,
                "errorMsg":"Required field."
            }
        }else{
            return {
                "isError":false,
                "errorMsg":""
            }
        }
    }

    static password(value){
        if(!new RegExp(PasswordRegEx.digit).test(value)){
            return{
                "isError":true,
                "errorMsg":"Digit is missing."   
            }
        }else if(!new RegExp(PasswordRegEx.lowercaseLetter).test(value)){
            return{
                "isError":true,
                "errorMsg":"LowercaseLetter is missing."   
            }
        }else if(!new RegExp(PasswordRegEx.uppercaseLetter).test(value)){
            return{
                "isError":true,
                "errorMsg":"UppercaseLetter is missing."   
            }
        }else if(!new RegExp(PasswordRegEx.specialCharacter).test(value)){
            return{
                "isError":true,
                "errorMsg":"Specialcharacter is missing."   
            }
        }else if(!new RegExp(PasswordRegEx.length).test(value)){
            return{
                "isError":true,
                "errorMsg":"Length should be greater than 7."   
            }
        }
        else{
            return{
                "isError":false,
                "errorMsg":""   
            }
        }
    }
}